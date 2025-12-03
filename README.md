# Swiss Carload API – Technical Test

This repository is a starter project for a **60-minute technical test**.

The goal is to:

1. Work with Git/GitHub (fork + branch + commit).
2. Extend a small **Express** API.
3. **Parse an XML file** and enrich the JSON response.

You do **not** need to write perfect production code. The focus is on how you approach the problem.

---

## 1. Requirements

- **Node.js**: v18+ (recommended)
- **npm** (Node package manager)
- A **GitHub** account
- Git installed locally

---

## 2. Project Structure

```text
swiss-carload-api-test/
├── src/
│   ├── app.js              # Express app (only /stations is implemented)
│   ├── server.js           # Entry point
│   └── extraInfoLoader.js  # XML helper stub (to be implemented)
├── data/
│   ├── stations.json       # Station data (already provided)
│   └── LOADINGTERMINAL_Status_d_f_i_.xml   # Extra info in XML (to be parsed)
├── package.json
└── README.md