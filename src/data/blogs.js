export const blogs = [
  {
    id: "http-versions",
    title: "HTTP 0.9 vs 1.0 vs 1.1 vs 2 vs 3",
    subtitle: "A deep dive into how HTTP evolved from a one-liner to a multiplexed binary protocol",
    date: "2025-04-20",
    readTime: "8 min read",
    tags: ["Networking", "HTTP", "Web"],
    content: `
Hypertext Transfer Protocol (HTTP) is the set of rules that lets your browser and the server talk to each other to send and receive webpages. It works at the application layer, which is the first layer that users directly interact with.

The rule was super simple at first in 1991. This very first version was called HTTP/0.9.

## HTTP/0.9

It only supported one command: GET. No headers, no status codes. Response was raw HTML only. Connection closed immediately after response.

\`\`\`
client: GET /index.html
server: (raw HTML content)
        Connection closed
\`\`\`

It was extremely limited.

## HTTP/1.0

No persistent connection (Default behavior): Each request uses a new TCP connection. After the server responds, the TCP connection is closed immediately.

\`\`\`
client: GET /page1 HTTP/1.0
server: 200 OK
        Connection closed
client: GET /page2 HTTP/1.0
server: 200 OK
        Connection closed
\`\`\`

Making it persistent explicitly: The \`Connection: keep-alive\` header can be added to make the TCP connection persistent. However, it wasn't standardized, and not all servers honored it.

## HTTP/1.1

Text Protocol. Persistent TCP connection (Default behavior): A TCP connection stays open by default, allowing multiple requests and responses to reuse the same connection. This reduces the overhead of repeated TCP handshakes.

However, if the first response is too large, it blocks the smaller ones behind it. This issue is known as **Head-of-Line (HOL) blocking** in HTTP/1.1.

**Pipelining (Optional):** HTTP pipelining allows the client to send multiple requests over the same TCP connection without waiting for each response. Here, responses must come in the same order as requests.

## HTTP/2.0

Binary Protocol. HTTP/2.0 splits requests into **frames** and **multiplexes** them over a single TCP connection.

**What are Streams?** A stream in HTTP/2.0 = one request/response pair. Each stream has its own Stream ID. Multiple streams can coexist over one TCP connection.

\`\`\`
Stream 1 → GET /index.html   → Response (HTML)
Stream 3 → GET /style.css    → Response (CSS)
Stream 5 → GET /script.js    → Response (JS)
Stream 7 → GET /image.png    → Response (PNG)
\`\`\`

The protocol rule: Client-initiated streams use odd numbers (1,3,5,…). Server-initiated streams use even numbers (2,4,6,…).

**What are Frames?** HTTP doesn't send an entire request/response at once. It chops data into frames (small packets at the HTTP layer). Each frame carries a Stream ID, Type, and Payload.

**What is Multiplexing?** Multiplexing = interleaving frames from multiple streams over the same TCP connection. Large responses no longer block small ones.

\`\`\`
With Multiplexing (HTTP/2.0):
[Frame (Stream 1: HTML part 1)]
[Frame (Stream 3: CSS part 1)]
[Frame (Stream 5: JS part 1)]
[Frame (Stream 1: HTML part 2)]
[Frame (Stream 7: Image part 1)]
\`\`\`

**The Problem:** TCP guarantees in-order delivery. If a TCP segment is lost, all subsequent segments are delayed — all HTTP/2 streams on that connection are affected. This is HOL blocking at the TCP layer.

## HTTP/3.0

HTTP/3.0 uses **QUIC**, which runs on UDP instead of TCP. Streams are independent at the transport layer. Each stream can lose packets and only that stream is blocked. Other streams continue flowing without delay.

\`\`\`
Stream 1 → Video (segment lost → retransmit)
Stream 3 → CSS (delivered ✓)
Stream 5 → JS  (delivered ✓)
\`\`\`

All streams make progress independently — this is the key breakthrough of HTTP/3.
    `
  },
  {
    id: "http-cache",
    title: "HTTP Caching Explained",
    subtitle: "From Cache-Control headers to ETags — how browsers and servers agree on what to store and when to refresh",
    date: "2025-04-25",
    readTime: "7 min read",
    tags: ["Networking", "HTTP", "Caching", "Web"],
    content: `
The HTTP protocol defines a set of caching rules that act as a universal language. Your browser, CDN, proxies, and gateways all speak this language and follow these rules faithfully.

## How the Browser Stores Data

Our browser's job is to organize where the cached data should be stored. It follows the HTTP protocol and implements it in the most optimal way — deciding whether to store data in memory (RAM) or on disk.

As developers, we have control using the \`Cache-Control\` header.

## Cache-Control

\`\`\`
Cache-Control: no-store
Cache-Control: no-cache
Cache-Control: public, max-age=86400
Cache-Control: private, max-age=300
\`\`\`

- **no-store** — Doesn't store the data at all. Ever. Nothing gets cached.
- **no-cache** — The most confusing one. Caching *does* happen, but with every request, the browser must check with the server whether the data has been modified. If not modified, server returns 304 (Not Modified) — no content sent, bandwidth saved.
- **public** — Data will be cached in every intermediary (CDNs, proxies, etc.), not just the browser.
- **private** — Data will be cached only in the browser, not in any intermediaries.
- **max-age** — Paired with public or private, tells the cache how long (in seconds) to store data before it's stale.

## Last-Modified Validator

If we have the last updated time, the next request can say: "If the data was updated after this time, give me the new data. Otherwise, don't send anything."

The server stores the last modified time of the resource. When the browser makes another request, it sends an \`If-Modified-Since\` header with that timestamp. If unchanged, the server returns 304.

**Problem:** Last-Modified can't track changes that happen within the same second — it doesn't track milliseconds.

## ETag

That's why ETag exists. It's a unique identifier (like a version number or hash) that changes with every update. The browser sends it back using the \`If-None-Match\` header. If the ETag matches, server returns 304. If not, server sends new content.

**Trade-off?** ETag is more accurate, but computationally more expensive to generate and compare.

## Preventing Lost Updates

Imagine two people editing the same resource. Person A fetches data to edit it. Meanwhile, Person B also fetches and updates it. Now when Person A saves their changes — they're overwriting Person B's work.

**If-Match with ETag:**

When Person A fetched the data, they got an ETag (say, \`"abc123"\`). When updating, the browser sends \`If-Match: "abc123"\`. The server checks: "Is the current ETag still \`abc123\`?" If yes, update goes through. If changed (Person B updated it), server rejects with **412 Precondition Failed**.

**If-Unmodified-Since:**

Similarly, the browser sends an \`If-Unmodified-Since\` header with the original timestamp. If modified since then, the request is rejected.

This protects against lost updates and ensures data integrity when multiple people work on the same resource.
    `
  }
];
