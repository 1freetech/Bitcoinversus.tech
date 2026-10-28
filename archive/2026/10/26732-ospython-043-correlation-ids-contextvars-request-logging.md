---
lesson_id: OSPython.043
post_id: 26732
title: "OSPython.043: Correlation IDs in Python Logging — Tracking Requests Across Tasks"
url: "https://bitcoinversus.tech/2026/10/27/ospython-043-correlation-ids-contextvars-request-logging/"
featured_media: 26731
in_story_media_count: 2
style: textbook-wiki
---

<!-- wp:paragraph --><p><strong>A correlation ID</strong> is an identifier attached to related application events so that a developer can follow a single request, job or operation through multiple <a href="https://bitcoinversus.tech/2026/10/07/ospython-028-python-logging-basics/">Python log records</a>. In a busy application, many tasks run at once, making chronological log order insufficient to reconstruct what happened. A request-specific ID helps connect messages from validation, database access, external services and error handling without confusing one user's operation with another. This is <strong>OSPython.043</strong>, continuing after <a href="https://bitcoinversus.tech/2026/10/27/ospython-042-capturing-python-warnings-in-application-logs/">OSPython.042 on capturing warnings in application logs</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Why related log records need an identity</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Imagine a web service processing hundreds of requests per second. A warning about a slow query and an error about a failed response might occur a few milliseconds apart but belong to different requests. A timestamp tells when each event occurred; the correlation ID tells which operation each event belongs to. This is a form of <a href="https://bitcoinversus.tech/2026/10/08/ospython-034-contextual-logging-with-loggeradapter-and-extra/">contextual logging</a>, where metadata is attached to ordinary log messages.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Correlation IDs should be unique enough for the relevant system and retention window, easy to pass between components and safe to expose to authorized diagnostic systems. They are not authentication tokens or secrets. Do not place passwords, access tokens or personally identifying data in an identifier. The earlier <a href="https://bitcoinversus.tech/2026/10/18/ospython-041-logging-secrets-safely-redaction-filters-and-credential-protection/">lesson on logging secrets safely</a> explains why logging metadata also needs privacy controls.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Creating a request-scoped ID in Python</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The standard library's <code>uuid</code> module can create random UUID version 4 identifiers. A request handler may generate an ID at the boundary of a new operation, then attach it to subsequent log messages. The example below shows the idea with <a href="https://bitcoinversus.tech/2026/10/08/ospython-034-contextual-logging-with-loggeradapter-and-extra/">LoggerAdapter</a>, which supplies extra fields to a logger without requiring every message to repeat them manually.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>import logging
from uuid import uuid4

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s request=%(request_id)s %(message)s",
)

logger = logging.getLogger("orders")


def process_order(order_id: int) -&gt; None:
    request_id = str(uuid4())
    log = logging.LoggerAdapter(logger, {"request_id": request_id})
    log.info("order validation started: order=%s", order_id)
    log.info("order validation completed: order=%s", order_id)


process_order(1042)</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Both records emitted by the call to <code>process_order</code> have the same ID, while another call receives a different one. The formatting string expects <code>request_id</code> to exist on every record processed by that handler. In a larger program, a missing field can cause a formatting error, so the application should use a consistent adapter, filter or record-factory strategy rather than mixing incompatible records.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The following existing editorial photograph shows a Python programming environment, providing visual context for writing and inspecting diagnostic output.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":21987,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ospython-031-python-logging-code.jpg" alt="Python source code and logging output on a development workstation" class="wp-image-21987"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Maintaining context across concurrent tasks</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A single <code>LoggerAdapter</code> works well when the logger is explicitly passed through the relevant call chain. In <a href="https://bitcoinversus.tech/2026/10/14/ospython-040-asyncio-logging/">asynchronous Python</a>, however, many coroutines can interleave on one thread. A mutable global variable is not a safe place to store the current request ID because unrelated operations may overwrite it. Python's <a href="https://docs.python.org/3/library/contextvars.html">contextvars</a> module provides context-local state that can follow asynchronous task execution under its documented semantics.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The following example attaches a context variable to records using a logging filter. It is deliberately small and uses the standard library only.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>import logging
from contextvars import ContextVar
from uuid import uuid4

request_id_var = ContextVar("request_id", default="-")


class RequestIdFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -&gt; bool:
        record.request_id = request_id_var.get()
        return True


handler = logging.StreamHandler()
handler.addFilter(RequestIdFilter())
handler.setFormatter(
    logging.Formatter("%(levelname)s request=%(request_id)s %(message)s")
)

logger = logging.getLogger("service")
logger.setLevel(logging.INFO)
logger.addHandler(handler)
logger.propagate = False


def handle_request() -&gt; None:
    token = request_id_var.set(str(uuid4()))
    try:
        logger.info("request started")
        logger.info("request completed")
    finally:
        request_id_var.reset(token)


handle_request()</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The <code>token</code> allows the previous context value to be restored in a <code>finally</code> block, preventing a completed operation's ID from leaking into later work in the same context. A production application should integrate context creation and cleanup at its request or job boundary. Thread pools, process pools and distributed services may need explicit propagation; do not assume context automatically crosses every boundary. Related lessons include <a href="https://bitcoinversus.tech/2026/10/12/ospython-038-multiprocessing-logging/">multiprocessing logging</a> and <a href="https://bitcoinversus.tech/2026/10/13/ospython-039-logging-with-processpoolexecutor/">ProcessPoolExecutor logging</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Correlation across service boundaries</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>When one service calls another, an authorized request identifier can be passed through a designated HTTP header or message field. The receiving service should validate the field's length and allowed characters, then decide whether to preserve it or generate a local ID according to its trust policy. A client-supplied ID must not be treated as proof of identity or permission.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For more complex distributed systems, the <a href="https://www.w3.org/TR/trace-context/">W3C Trace Context specification</a> defines standard tracing headers such as <code>traceparent</code>. A trace ID connects related operations across services, while span IDs identify individual units of work within that trace. An ordinary application correlation ID can be simpler, but it should not be confused with a complete distributed tracing implementation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The next existing Python developer image illustrates a code review and diagnostic environment. In practice, developers often combine correlation IDs with structured fields such as service name, event type, severity and timestamp.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":22842,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ospython-033-logging-filters-cover.png" alt="Developer inspecting Python code and log filtering on a workstation" class="wp-image-22842"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Working example: investigating an error</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose an API request produces three events: <code>INFO request=7fa2 start</code>, <code>WARNING request=7fa2 upstream slow</code> and <code>ERROR request=7fa2 timeout</code>. A separate request produces <code>INFO request=93b1 complete</code> between the warning and error. Searching for <code>request=7fa2</code> reconstructs the relevant operation without mixing the successful request into the incident timeline. In a real deployment, use a longer, collision-resistant ID rather than these shortened teaching examples.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Correlation does not prove causation: two events sharing an ID may still need timestamps, component details and supporting metrics to establish what failed. The <a href="https://bitcoinversus.tech/2026/10/10/ospython-035-logging-exceptions-exc-info-tracebacks-stack-info/">exception logging lesson</a> explains how to preserve tracebacks, while <a href="https://bitcoinversus.tech/2026/10/11/ospython-036-logging-configuration-dictconfig-handlers-formatters-loggers-json/">dictConfig</a> covers consistent application-wide logging configuration.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Operational safeguards</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>High-volume services should avoid unbounded log output and sensitive fields. When a request ID is present in all records, the logging pipeline should still use sensible levels, <a href="https://bitcoinversus.tech/2026/10/09/ospython-033-logging-filters-select-records-custom-rules/">filters</a>, retention rules and access controls. For slow handlers, <a href="https://bitcoinversus.tech/2026/10/11/ospython-037-queuehandler-queuelistener-non-blocking-logging-background-queues/">QueueHandler and QueueListener</a> can move work off latency-sensitive code paths. If an application captures warnings, its warning records also need a deliberate context strategy; see <a href="https://bitcoinversus.tech/2026/10/27/ospython-042-capturing-python-warnings-in-application-logs/">OSPython.042</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Why is a timestamp insufficient to associate all log records with one concurrent request?</li><li>What is the benefit of restoring a <code>ContextVar</code> using its token?</li><li>Does a correlation ID authenticate a user or prove that one event caused another?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> Concurrent operations interleave their events; resetting prevents stale context from contaminating later work; no, it is an observability identifier rather than an authorization or causation mechanism.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>References and further reading</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary references include the <a href="https://docs.python.org/3/library/logging.html">Python logging documentation</a>, <a href="https://docs.python.org/3/library/contextvars.html">Python contextvars documentation</a>, <a href="https://docs.python.org/3/library/uuid.html">Python uuid documentation</a> and the <a href="https://www.w3.org/TR/trace-context/">W3C Trace Context standard</a>. For earlier curriculum material, follow the contextual links to <a href="https://bitcoinversus.tech/2026/10/08/ospython-034-contextual-logging-with-loggeradapter-and-extra/">LoggerAdapter</a>, <a href="https://bitcoinversus.tech/2026/10/14/ospython-040-asyncio-logging/">asyncio logging</a> and <a href="https://bitcoinversus.tech/2026/10/18/ospython-041-logging-secrets-safely-redaction-filters-and-credential-protection/">secret redaction</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> Help keep independent Python education accessible with a donation of <strong>5,000 sats</strong>. Scan the QR code below with a compatible Bitcoin wallet to contribute.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech donation QR code" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Display the QR on another screen and scan it with your Bitcoin wallet.</em></p><!-- /wp:paragraph -->