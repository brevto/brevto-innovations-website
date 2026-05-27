# Brevto

This small tool reads three root files if present: `perplexity-result.txt`, `chatgpt-result.txt`, and `brevto-website-todo.txt`, then generates a combined summary focused on the `perplexity` results while preserving important items from the others.

Usage

Install Node (16+), then from the project root run:

```bash
node src/generate.js
```

Output

- `dist/combined.md` — combined markdown
- `dist/index.html` — simple HTML view prioritizing `perplexity-result.txt`
