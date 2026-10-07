<!-- wp:paragraph --><p><strong>Python can send log messages to a file instead of leaving them only in the terminal. This lesson focuses on one job: saving useful application logs to disk with the standard <code>logging</code> module.</strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Start with <a href="https://bitcoinversus.tech/2026/10/07/ospython-028-python-logging-basics/">OSPython.028: Python Logging Basics</a> if you need a refresher on DEBUG, INFO, WARNING, ERROR, and CRITICAL.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">Write Logs Directly To A File</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>The shortest path is <code>logging.basicConfig()</code> with a <code>filename</code>. Python then creates a file handler for you and writes messages that meet the configured severity threshold.</p><!-- /wp:paragraph -->
<!-- wp:code --><pre class="wp-block-code"><code>import logging

logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)

logging.info("Application started")
logging.warning("Disk space is getting low")</code></pre><!-- /wp:code -->
<!-- wp:paragraph --><p>By default, the file is opened in append mode, so new log records are added to the end instead of erasing earlier entries. You can explicitly set <code>filemode="w"</code> when you intentionally want each run to replace the previous file.</p><!-- /wp:paragraph -->
<!-- wp:html --><div class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=-ARI4Cz-awo]</div><p><em>Corey Schafer demonstrates Python logging to files, severity levels, and log formatting.</em></p></div><!-- /wp:html -->
<!-- wp:heading --><h2 class="wp-block-heading">Use FileHandler When You Need Explicit Control</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><code>logging.FileHandler</code> is useful when you want to create the file destination yourself and attach it to a named logger. A handler decides where a log record goes; a formatter decides how that record looks.</p><!-- /wp:paragraph -->
<!-- wp:code --><pre class="wp-block-code"><code>import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

file_handler = logging.FileHandler("service.log")
formatter = logging.Formatter(
    "%(asctime)s %(levelname)s %(name)s %(message)s"
)
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

logger.info("Service started")</code></pre><!-- /wp:code -->
<!-- wp:paragraph --><p>This pattern separates the logger from its destination. Later lessons can add console output or rotating files without changing every <code>logger.info()</code> and <code>logger.error()</code> call in the program.</p><!-- /wp:paragraph -->
<!-- wp:html --><div class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=jxmzY9soFXg]</div><p><em>Corey Schafer explains named loggers, handlers, and formatters in Python.</em></p></div><!-- /wp:html -->
<!-- wp:heading --><h2 class="wp-block-heading">Basic Troubleshooting</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>If the file stays empty, first check the severity threshold. An INFO message will not be written when the logger or handler is set to WARNING. Also verify that the process has permission to write to the chosen directory.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>If you are inspecting the log with Python, the earlier <a href="https://bitcoinversus.tech/2026/09/27/open-source-python-lesson-7-reading-and-writing-files/">file reading and writing lesson</a> covers basic file access. Never place passwords, API keys, authentication tokens, or other secrets in routine logs.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">Exercise</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Create a script that writes INFO and ERROR messages to <code>practice.log</code>. Run it twice and confirm that the second run appends new entries. Then change the file mode to <code>"w"</code> and observe the difference.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->
<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What does the <code>filename</code> argument in <code>basicConfig()</code> do?</li><li>What is the default behavior of append mode?</li><li>What does a <code>FileHandler</code> control?</li><li>What does a formatter control?</li></ol><!-- /wp:list -->
<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Answers</h3><!-- /wp:heading -->
<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>It sends logging output to the named file.</li><li>It keeps existing content and adds new records at the end.</li><li>It controls the log destination.</li><li>It controls how log records are displayed.</li></ol><!-- /wp:list -->
<!-- wp:heading --><h2 class="wp-block-heading">Next Lesson</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>This lesson intentionally stops at ordinary file logging. Log rotation belongs in the next focused lesson rather than being mixed into this one.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">References</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Primary reference: <a href="https://docs.python.org/3/howto/logging.html">Python Logging HOWTO</a>. Python documents <code>FileHandler</code> as the standard handler for sending log records to disk files.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor’s Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong><em>We volunteer daily to help keep the information on this platform verifiably accurate. If you would like to support our independent research, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p><!-- /wp:paragraph -->