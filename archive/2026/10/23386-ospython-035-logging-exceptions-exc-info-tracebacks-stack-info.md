---
post_id: 23386
title: "OSPython.035: Logging Exceptions — logging.exception(), exc_info, Tracebacks, and stack_info"
live_url: "https://bitcoinversus.tech/2026/10/10/ospython-035-logging-exceptions-exc-info-tracebacks-stack-info/"
featured_media_id: 23383
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-ospython-035-logging-exceptions-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>Production software does not fail in front of the developer who wrote it. It fails later, on another machine, under another workload. Exception logging is how you preserve enough evidence to understand what happened after the moment has passed.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This lesson continues directly from <a href="https://bitcoinversus.tech/2026/10/10/ospython-034-contextual-logging-with-loggeradapter-and-extra/">OSPython.034: Contextual Logging with LoggerAdapter and extra</a> and <a href="https://bitcoinversus.tech/2026/10/09/ospython-033-logging-filters-select-records-custom-rules/">OSPython.033: Logging Filters</a>. You already know how to create useful records, add context, format them, filter them, and send them to handlers. Now the goal is to make failure records useful enough to reconstruct the path to an exception.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Use <code>logger.exception()</code> correctly inside an exception handler.</li><li>Understand how <code>exc_info=True</code> adds traceback information to ordinary logging calls.</li><li>Distinguish exception traceback data from <code>stack_info=True</code>.</li><li>Choose when to log, re-raise, translate, or suppress an exception.</li><li>Avoid duplicate tracebacks when several layers handle the same failure.</li><li>Keep passwords, tokens, secrets, and sensitive payloads out of logs.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why the message alone is not enough</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consider an application that records only this message:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ERROR: Failed to process order</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The message tells you that something failed, but not where the failure originated, which function called it, which line raised the exception, or what exception type Python produced. A traceback preserves that execution history.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://docs.python.org/3/library/logging.html">Python logging documentation</a> defines <code>Logger.exception()</code> as an ERROR-level log call that automatically adds the active exception information. The documentation also makes an important restriction explicit: call it from an exception handler, where Python has an active exception to report.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://2018.pycon-au.org/talks/41793-a-guided-tour-of-python-logging/"><img src="https://2018.pycon-au.org/static/img/people/curtis-maloney.png" alt="Curtis Maloney, presenter of A Guided Tour of Python Logging at PyCon AU 2018." /></a><figcaption class="wp-element-caption"><em>Curtis Maloney presented “A Guided Tour of Python Logging” at PyCon AU, covering the logging system’s conceptual structure, configuration, and practical use. Source: PyCon AU.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">logging.exception() captures the active traceback</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The simplest pattern is to catch the exception you expect to handle and log it inside the <code>except</code> block.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import logging

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

try:
    value = 10 / 0
except ZeroDivisionError:
    logger.exception("Calculation failed")</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The log record contains your message plus the exception type, message, file, line number, and traceback frames. You do not need to manually call <code>traceback.print_exc()</code> just to get the traceback into the logging system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important rule is placement. This is correct:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>try:
    load_configuration()
except OSError:
    logger.exception("Configuration load failed")</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is usually wrong:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>logger.exception("Something failed")  # no active exception here</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Outside an active exception handler, there may be no meaningful exception state to attach. If you simply need an ERROR message, use <code>logger.error()</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=DxZ5WEo4hvU","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=DxZ5WEo4hvU
</div><figcaption class="wp-element-caption"><em>PyCon AU’s “A Guided Tour of Python Logging” provides a deeper look at the standard library logging architecture used throughout this lesson.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">exc_info=True gives other log levels a traceback</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>logger.exception()</code> is effectively an ERROR-level convenience method. Sometimes the event belongs at another severity level. In that case, use the normal logging method and set <code>exc_info=True</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>try:
    cached_value = cache.read("user:42")
except CacheError:
    logger.warning(
        "Cache read failed; falling back to database",
        exc_info=True,
    )
    cached_value = database.read_user(42)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The event is a WARNING because the application recovered, but the traceback is still preserved for investigation. The same technique works with <code>debug()</code>, <code>info()</code>, <code>error()</code>, and <code>critical()</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key distinction is therefore:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><code>logger.exception("message")</code> logs at ERROR and includes exception information.</li><li><code>logger.error("message", exc_info=True)</code> also logs at ERROR and includes exception information.</li><li><code>logger.warning("message", exc_info=True)</code> includes the traceback but records the event at WARNING.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">exc_info and stack_info are not the same thing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The official logging API exposes both <code>exc_info</code> and <code>stack_info</code>, but they answer different debugging questions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>exc_info</code></strong> records the stack frames associated with an exception that has been raised and unwound while Python searched for a handler.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>stack_info=True</code></strong> records the current call stack leading to the logging call, even if no exception occurred.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>def validate_state(state):
    if state == "unexpected":
        logger.warning(
            "Unexpected state reached",
            stack_info=True,
        )</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This can be valuable when you need to know how execution reached a suspicious branch without intentionally throwing an exception.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/emilyriederer.bsky.social/post/3kstupk7dj32x","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/emilyriederer.bsky.social/post/3kstupk7dj32x
</div><figcaption class="wp-element-caption"><em>Emily Riederer highlights a Python logging tutorial for its explanation of the logging mental model, modern practices, and customization.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Log at the layer that has enough context</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common production mistake is logging the same exception at every layer of the call stack.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>def read_record():
    try:
        return database.read()
    except DatabaseError:
        logger.exception("Database failed")
        raise


def handle_request():
    try:
        return read_record()
    except DatabaseError:
        logger.exception("Request failed")
        raise</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>One failure can now produce two nearly identical tracebacks. In a high-volume system that creates noise, wastes storage, and makes alert counts misleading.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A stronger design is to choose the layer that has enough business or operational context to make the record useful. Lower layers may simply raise the exception. The boundary layer logs it once with identifiers such as request ID, job ID, customer ID, file name, or operation name when those identifiers are safe to record.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>def read_record():
    return database.read()


def handle_request(request_id):
    try:
        return read_record()
    except DatabaseError:
        logger.exception(
            "Request failed",
            extra={"request_id": request_id},
        )
        raise</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Log and re-raise when the caller still needs the failure</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Logging an exception does not handle it automatically. After logging, decide whether the program can recover.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>try:
    save_invoice(invoice)
except DatabaseError:
    logger.exception("Invoice write failed")
    raise</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A bare <code>raise</code> inside the handler re-raises the same exception with its original traceback. This is usually preferable to <code>raise error</code> when your intent is simply to propagate the current exception.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the layer needs to translate an implementation-specific exception into a domain exception, use exception chaining:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>try:
    customer = repository.load(customer_id)
except DatabaseError as exc:
    raise CustomerLookupError(customer_id) from exc</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The <code>from exc</code> relationship preserves the causal chain, which makes the final traceback much more useful.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Do not log secrets just because an exception exposes them</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Tracebacks are diagnostic data, and diagnostic data can contain sensitive information. URLs may contain API keys. Request objects can contain authorization headers. Database errors can expose query values. File paths can reveal usernames or internal directory structures.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Before logging arbitrary objects or exception messages, decide what the log is allowed to contain. Never intentionally place passwords, private keys, session cookies, authentication tokens, recovery codes, or full secret-bearing request payloads into a production log.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Avoid this if request_headers may contain credentials.
logger.exception("Request failed: %r", request_headers)

# Prefer known-safe fields.
logger.exception(
    "Request failed method=%s path=%s",
    method,
    safe_path,
)</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical example: resilient file processing</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import json
import logging
from pathlib import Path

logger = logging.getLogger(__name__)


def load_json(path: Path):
    try:
        with path.open("r", encoding="utf-8") as handle:
            return json.load(handle)
    except FileNotFoundError:
        logger.warning(
            "Input file does not exist path=%s",
            path,
            exc_info=True,
        )
        return None
    except json.JSONDecodeError:
        logger.exception("Invalid JSON path=%s", path)
        raise


def main():
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )

    data = load_json(Path("settings.json"))
    if data is None:
        logger.info("Using built-in defaults")


if __name__ == "__main__":
    main()</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The two exceptions represent different operational meanings. A missing optional file is recoverable, so the program logs a WARNING and uses defaults. Malformed JSON means the file exists but cannot be trusted, so the function logs the traceback and re-raises the failure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Exercises</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Write a function that divides two integers. Catch <code>ZeroDivisionError</code> and record the traceback with <code>logger.exception()</code>.</li><li>Rewrite the same handler using <code>logger.error(..., exc_info=True)</code>. Compare the output.</li><li>Change the level to WARNING while keeping the traceback.</li><li>Create a three-function call chain and add <code>stack_info=True</code> to the deepest function without raising an exception. Compare that output with a real exception traceback.</li><li>Create a lower-level function that raises an exception and a higher-level function that logs it once. Verify that the same traceback is not duplicated.</li><li>Add a safe request ID with <code>extra</code> while ensuring that an imaginary API token is never logged.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge check</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>What severity level does <code>logger.exception()</code> use by default?</li><li>Where should <code>logger.exception()</code> normally be called?</li><li>How can a WARNING-level record include an exception traceback?</li><li>What is the difference between <code>exc_info=True</code> and <code>stack_info=True</code>?</li><li>Why can logging the same exception at every layer be harmful?</li><li>What does a bare <code>raise</code> do inside an exception handler?</li><li>Why should exception logs be reviewed for sensitive data?</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Answer guide</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>ERROR.</li><li>Inside an active exception handler, normally an <code>except</code> block.</li><li>Use <code>logger.warning("message", exc_info=True)</code>.</li><li><code>exc_info</code> records exception traceback information; <code>stack_info</code> records the current call stack leading to the logging call even without an exception.</li><li>It creates duplicate tracebacks, increases noise and storage, and can distort alert and incident counts.</li><li>It re-raises the currently handled exception while preserving its traceback.</li><li>Exception messages and surrounding objects can contain credentials, tokens, customer data, internal paths, or other sensitive information.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>A useful exception log answers three questions: what operation failed, where did the failure originate, and what context will help someone reproduce or diagnose it without exposing secrets.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>logger.exception()</code> is the shortest path to a traceback when you are already inside an exception handler. <code>exc_info=True</code> gives you the same traceback capability at other log levels, while <code>stack_info=True</code> answers a different question by showing how execution reached the logging statement itself.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent technology reporting and open-source technical education.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->