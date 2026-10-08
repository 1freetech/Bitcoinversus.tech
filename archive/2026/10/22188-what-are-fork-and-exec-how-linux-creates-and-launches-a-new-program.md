---
post_id: 22188
title: "What Are fork() and exec()? How Linux Creates and Launches a New Program"
live_url: "https://bitcoinversus.tech/2026/10/08/what-are-fork-and-exec-how-linux-creates-and-launches-a-new-program/"
featured_media_id: 22186
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/fork-exec-evergreen-cover-1200x630-1.jpg"
status: published
---

<!-- wp:paragraph -->
<p>When you type a command such as <code>ls -l</code> into a Linux shell, the shell usually does <strong>not</strong> transform itself into <code>ls</code>. Instead, Unix-like systems traditionally split the job into two operations: <strong><code>fork()</code> creates a child process</strong>, then an <strong><code>exec()</code> function replaces that child’s current program with the program you actually asked to run</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the next step after understanding <a href="https://bitcoinversus.tech/2026/10/08/what-is-systemd-how-linux-starts-stops-and-watches-background-services/"><strong>systemd and Linux services</strong></a>. systemd can request that a service start, but below that management layer the operating system still has to create processes, load executable code, connect <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/"><strong>file descriptors</strong></a>, schedule CPU time, and hand control to the new program. <code>fork()</code> and <code>exec()</code> are central pieces of that path.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=fKJgpC1gamo","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=fKJgpC1gamo
</div><figcaption class="wp-element-caption"><em>This walkthrough connects fork(), exec(), PID/PPID relationships, copy-on-write memory, and the way Linux launches commands in real systems.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Short Version: Create, Then Replace</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>fork()</code> creates a new process by making a child from the calling process. After a successful fork, <strong>both parent and child continue executing from the instruction after the fork call</strong>. The child gets a new process ID, or PID, while keeping a relationship to the parent through its parent PID, or PPID.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>exec()</code> is different. It does not create another process. An exec-family call replaces the program image inside the process that called it. The process keeps its PID, but its code, data, stack, loaded executable, and much of its userspace memory are replaced by the new program. The Linux/POSIX <a href="https://www.man7.org/linux/man-pages/man3/fork.3p.html"><strong>fork documentation</strong></a> explicitly describes the common pattern in which fork is followed by an exec function when the goal is to run a different program.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22187,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/fork-exec-process-flow-diagram.png?w=1024" alt="Diagram showing a shell process forking into a child process with copy-on-write memory, then execve replacing the child with a new program while keeping its PID." class="wp-image-22187" /><figcaption class="wp-element-caption"><em>The classic Linux flow: the shell exists first, fork() creates a child, and execve() replaces the child’s program while the child keeps its PID.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What fork() Actually Returns</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The clever part of <code>fork()</code> is that the same call returns in two processes. The return value tells the code which side it is running on. In the parent, fork returns the child’s PID. In the child, fork returns <code>0</code>. If creation fails, the parent receives <code>-1</code> and no child is created.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;

int main(void) {
    pid_t pid = fork();

    if (pid &lt; 0) {
        perror("fork");
        return 1;
    }

    if (pid == 0) {
        printf("child:  PID=%d PPID=%d\n", getpid(), getppid());
    } else {
        printf("parent: PID=%d child=%d\n", getpid(), pid);
    }

    return 0;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Because both processes continue independently, their exact print order is not guaranteed. The <a href="https://bitcoinversus.tech/2026/10/08/what-is-context-switch-cpu-process-thread-scheduler/"><strong>CPU scheduler</strong></a> decides which runnable process gets CPU time next. That is why process creation and process scheduling are related but different operating-system jobs.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">fork() Does Not Normally Copy Every Byte of RAM Immediately</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At first glance, duplicating a large process sounds expensive. Modern Linux avoids blindly copying all physical memory by using <strong>copy-on-write</strong>. Parent and child initially reference the same physical memory pages where possible. The kernel protects those mappings so that if either process tries to modify a shared page, a private copy is created for the writer at that point.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is especially useful for the common fork-then-exec pattern. If the child immediately calls exec, most of the inherited memory was only needed for a tiny window and can be discarded when the new executable is loaded. The <a href="https://bitcoinversus.tech/2026/03/30/the-kernel/"><strong>Linux kernel</strong></a> therefore avoids doing a huge amount of work that the child might immediately throw away.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">exec() Keeps the Process but Replaces the Program</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There is no single userspace function literally named just <code>exec()</code>. C libraries expose an <strong>exec family</strong> such as <code>execl()</code>, <code>execv()</code>, <code>execvp()</code>, and <code>execve()</code>. On Linux, <code>execve()</code> is the underlying system call that loads the new executable. Its manual explains that the calling program is replaced by a new program with a newly initialized stack, heap, and data segments.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;

int main(void) {
    printf("before exec\n");

    execl("/bin/ls", "ls", "-l", NULL);

    /* Reached only if exec failed. */
    perror("execl");
    return 1;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If <code>execl()</code> succeeds, the original program does not continue to the next line. The process is now running <code>/bin/ls</code>. That path connects naturally to the Linux filesystem: BitcoinVersus.Tech previously covered the <a href="https://bitcoinversus.tech/2025/09/09/file-system-directory-2-bin-linux-0s-2/"><strong>/bin directory</strong></a>, while the shell may also search locations listed in the <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-path-environment-variable-windows-linux/"><strong>PATH environment variable</strong></a> when you type a command without a full pathname.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why File Descriptors Matter Between fork() and exec()</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A child created by fork inherits copies of the parent’s open file descriptors. That is one of the reasons the split between fork and exec is so powerful. The child can change where standard input, standard output, and standard error point <strong>before</strong> loading the new program.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>0 = standard input
1 = standard output
2 = standard error</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A shell implementing <code>command &gt; output.txt</code> can fork, open the file, duplicate that file descriptor onto descriptor <code>1</code>, then exec the requested command. The new program starts with stdout already pointing at the file. The program does not need to know that the shell rewired it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same mechanism powers pipelines. For <code>producer | consumer</code>, the shell can create a pipe, fork children, connect the producer’s stdout to the pipe’s write end and the consumer’s stdin to the read end, then exec each program. This is closely related to the broader Linux rule explained in our <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/"><strong>file descriptor explainer</strong></a>: files, pipes, sockets, and devices can all be represented through descriptor numbers inside a process.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=nwm7rJG90i8","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=nwm7rJG90i8
</div><figcaption class="wp-element-caption"><em>This systems-programming lesson demonstrates the classic fork-and-exec model and why shells separate process creation from loading the new program.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Parent Usually Calls wait()</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After launching a child, a shell or service manager often needs to know when that child finishes. Functions such as <code>wait()</code> and <code>waitpid()</code> let the parent collect the child’s termination status. Without that bookkeeping, an exited child can remain represented by a small kernel record called a <strong>zombie process</strong> until the parent collects its status.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>pid_t pid = fork();

if (pid == 0) {
    execl("/bin/ls", "ls", "-l", NULL);
    _exit(127);
}

if (pid &gt; 0) {
    int status;
    waitpid(pid, &amp;status, 0);
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This parent-child relationship is also why tools such as <a href="https://bitcoinversus.tech/2025/05/06/command-14-top-linux-os/"><strong>top</strong></a>, <code>ps</code>, process trees, and service managers can show hierarchies instead of treating every process as unrelated.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Happens When You Type ls -l?</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>The shell is already running.</strong> It reads your command line.</li><li><strong>The shell parses the command.</strong> It identifies <code>ls</code>, the <code>-l</code> argument, redirections, pipes, and background operators if present.</li><li><strong>The shell resolves the executable.</strong> It may use <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-path-environment-variable-windows-linux/"><strong>PATH</strong></a> to find something such as <code>/usr/bin/ls</code>.</li><li><strong>The shell calls fork.</strong> A child process is created.</li><li><strong>The child prepares I/O.</strong> File descriptors can be redirected or connected to pipes.</li><li><strong>The child calls exec.</strong> Its shell program image is replaced by <code>ls</code>.</li><li><strong>The kernel schedules the child.</strong> The <code>ls</code> program runs and writes its output.</li><li><strong>The parent waits.</strong> For a foreground job, the shell normally waits until the child completes before presenting another prompt.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">You Can Watch execve() With strace</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>strace</strong> makes this less abstract because it can display system calls made by a program. The official <a href="https://strace.io/"><strong>strace project</strong></a> describes it as a diagnostic and debugging utility for tracing system calls and signals.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>strace -f -e trace=process bash -c 'ls -l'

# Or focus on exec:
strace -f -e trace=execve bash -c 'ls -l'</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>On a typical system you will see an <code>execve()</code> for the program being launched. The exact fork-related syscall shown by tracing can vary because Linux and its C library may use lower-level primitives such as <code>clone()</code> underneath higher-level process-creation APIs.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/jeffgeerling.com/post/3lnv3xohq7c2b","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/jeffgeerling.com/post/3lnv3xohq7c2b
</div><figcaption class="wp-element-caption"><em>Jeff Geerling’s Linux post points to systemd-analyze as another example of making Linux startup behavior observable rather than treating process launch as a black box.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">fork() Is Not the Only Way to Launch Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The classic Unix model is not the only process-creation interface. POSIX also provides <code>posix_spawn()</code>, and Linux exposes primitives such as <code>clone()</code> that can create processes or threads with more control over what is shared. Libraries and runtimes may choose different implementations depending on performance, threading, portability, and security requirements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The distinction matters especially in large multithreaded programs. After a process with multiple threads forks, the child starts with only the thread that called fork, while inherited userspace synchronization state can be awkward. That is one reason modern runtimes often prefer spawn-style APIs for straightforward “launch this program” work.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How This Connects Back to systemd</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you run <code>systemctl start example.service</code>, <a href="https://bitcoinversus.tech/2026/10/08/what-is-systemd-how-linux-starts-stops-and-watches-background-services/"><strong>systemd</strong></a> handles the service-level policy: dependencies, environment, privileges, cgroups, restart rules, logging, and lifecycle. Beneath that policy, Linux still has to create and execute the service process. Understanding fork/exec makes service managers less mysterious because you can separate <strong>who decided the program should start</strong> from <strong>how the operating system actually creates and loads the process</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Bottom Line</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><code>fork()</code> creates a child process; <code>exec()</code> replaces a process’s current program with a new one.</strong> The combination lets a shell or service manager prepare a child—rewire file descriptors, change directories, adjust credentials, connect pipes, set environment variables—before loading the requested executable. Copy-on-write keeps the fork step from blindly duplicating every memory page, and <code>wait()</code> lets the parent track how the child finishes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next useful rabbit hole is <strong>what exactly is <code>execve()</code> loading?</strong> That leads into ELF executable files, the dynamic linker, shared libraries, <code>argv</code>, environment variables, virtual memory mappings, and how the kernel hands execution to a new program.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Primary technical references: the Linux/POSIX <a href="https://www.man7.org/linux/man-pages/man3/fork.3p.html"><strong>fork()</strong></a> documentation and the Linux <a href="https://man7.org/linux/man-pages/man2/execve.2.html"><strong>execve()</strong></a> manual.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This article describes the classic Unix/Linux process-launch model at an introductory level. The exact kernel syscall sequence can differ by architecture, C library, shell, threading model, and whether software uses fork, vfork, clone, posix_spawn, or another runtime abstraction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial and technology subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->