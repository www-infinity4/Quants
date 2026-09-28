# Quants

Quants is an anonymous, topic-first graph for connecting search and collection transitions across compatible apps.

## Vocabulary

- **quant** — one reusable unit describing a topic/content state and its attached media/refinement metadata.
- **bit flip** — a transition from one quant state to another, such as `Pink Floyd -> Bangkok`.
- **quantum travel** — this project's name for moving/copying a quant between compatible endpoints. This is product vocabulary, not a claim of physical quantum transport.
- **quanta** — multiple quants considered together.
- **quantify** — lay out and combine the relevant bit flips/relationships so a result can use the wider graph.

A quant is not a person profile. Producers SHOULD NOT send names, account IDs, email addresses, IP addresses, device fingerprints, or other direct identifiers. The graph is about reusable relationships among topics, media and transitions.

## Why

A single search can be useful without identifying its user. If one anonymous transition connects Pink Floyd to Bangkok and other independent quants connect Bangkok to music venues, albums, history or current reporting, the graph can expose those paths. News Phi can then start from a person's locally/cloud-stored collected topics and expand through aggregate quant relationships before retrieving current stories.

## Package

The browser/worker-neutral module is in `src/quants.js`. It provides:

- canonical quant creation and deterministic IDs
- bit-flip creation
- in-memory graph ingestion
- graph expansion by topic/quant
- News Phi seed generation
- JSON import/export
- a small plugin API for any compatible site

See `docs/NEWS_PHI.md` and `examples/browser.js`.

## Shared click reader

`src/click-reader.js` is an opt-in browser adapter for participating Infinity sites. Install it with a `site` name and `getContext()` returning the current topic, Quant ID and optional token ID. It records link and button actions with a parent Quant, then posts metadata through `StarQuestCloudLedger.authenticatedFetch` to the authenticated Quanta Phi ledger. It queues up to 100 events locally while the wallet or network is unavailable and retries on focus. It never reads input values, form contents, full URLs, passwords, or private browsing data. The server binds events to the authenticated wallet; the public topic graph does not receive personal click metadata.

A script cannot observe other origins by itself. Each site must include the reader and supply its own context. Quanta Phi is the first integration; other site integrations can reuse the same adapter.
