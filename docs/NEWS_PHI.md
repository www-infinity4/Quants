# News Phi handoff

News Phi should not begin with a generic global feed. It should begin with **user-chosen seeds**, then use Quants to broaden those seeds before fetching current reporting.

1. Read chosen/collected topic seeds from the client (localStorage) or the user's own Cloudflare-backed collection store.
2. Send only the topic/quant IDs needed for expansion; do not turn the Quants graph into a person profile.
3. Call `plugin.newsSeeds(seed, { depth: 2 })` for each seed.
4. Merge/dedupe expanded topics. Preserve distance so the original choice remains strongest.
5. Retrieve fresh news for those topics from the news/search provider at request time.
6. Rank stories by connection to the chosen seeds, freshness, source quality and duplication—not by a hidden identity profile.
7. Show a "Why this story" path such as `Pink Floyd -> Bangkok -> venue story` so the connection is inspectable.

## Suggested Worker API

- `POST /v1/quants` ingest a sanitized quant
- `POST /v1/flips` ingest a relationship
- `GET /v1/expand?topic=Pink%20Floyd&depth=2`
- `POST /v1/news-seeds` body: `{"seeds":["Pink Floyd"],"depth":2}`
- `GET /v1/export` portable graph snapshot

At scale, persist quant nodes and aggregate edge counts in D1. Repeated equivalent flips should increase an aggregate count/weight rather than store a user identity.
