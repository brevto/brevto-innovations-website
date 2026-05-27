import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const files = [
  'perplexity-result.txt',
  'chatgpt-result.txt',
  'brevto-website-todo.txt'
];

async function readIfExists(name) {
  try {
    const p = path.join(ROOT, name);
    const txt = await fs.readFile(p, 'utf8');
    return txt;
  } catch (e) {
    return null;
  }
}

function extractItems(text) {
  if (!text) return [];
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const items = [];
  for (const line of lines) {
    if (/^[-*\u2022]\s+/.test(line) || /^\d+\.\s+/.test(line) || /feature[:\-]/i.test(line)) {
      items.push(line.replace(/^[-*\u2022]\s+/, '').replace(/^\d+\.\s+/, ''));
    }
  }
  // fallback: take short headline lines
  if (items.length === 0) {
    for (const line of lines) {
      if (line.length > 20 && line.length < 200) items.push(line);
    }
  }
  return items;
}

function mergeFeatures(perpItems, chatItems, todoItems) {
  const seen = new Set();
  const out = [];
  const pushUnique = (list) => {
    for (const it of list) {
      const key = it.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(it);
      }
    }
  };
  // prioritize perplexity items
  pushUnique(perpItems);
  pushUnique(chatItems);
  pushUnique(todoItems);
  return out;
}

async function main() {
  const perp = await readIfExists(files[0]);
  const chat = await readIfExists(files[1]);
  const todo = await readIfExists(files[2]);

  const perpItems = extractItems(perp);
  const chatItems = extractItems(chat);
  const todoItems = extractItems(todo);

  const features = mergeFeatures(perpItems, chatItems, todoItems);

  const dist = path.join(ROOT, 'dist');
  await fs.mkdir(dist, { recursive: true });

  const md = [];
  md.push('# Brevto Combined Notes\n');
  if (perp) md.push('## Perplexity Results\n' + perp + '\n');
  if (chat) md.push('## ChatGPT Results\n' + chat + '\n');
  if (todo) md.push('## Website TODOs\n' + todo + '\n');

  md.push('## Aggregated Features (prioritized from Perplexity)');
  for (const f of features) md.push('- ' + f);

  await fs.writeFile(path.join(dist, 'combined.md'), md.join('\n\n'), 'utf8');

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Brevto Combined</title>
  <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;margin:32px;max-width:900px}h1,h2{color:#111}ul{line-height:1.5}</style>
</head>
<body>
  <h1>Brevto Combined Notes</h1>
  ${perp ? `<section><h2>Perplexity Results</h2><pre>${escapeHtml(perp)}</pre></section>` : `<p><em>No perplexity-result.txt found</em></p>`}
  ${chat ? `<section><h2>ChatGPT Results</h2><pre>${escapeHtml(chat)}</pre></section>` : ''}
  ${todo ? `<section><h2>Website TODOs</h2><pre>${escapeHtml(todo)}</pre></section>` : ''}
  <section>
    <h2>Aggregated Features (prioritized)</h2>
    <ul>
      ${features.map(f=>`<li>${escapeHtml(f)}</li>`).join('\n')}
    </ul>
  </section>
</body>
</html>`;

  await fs.writeFile(path.join(dist, 'index.html'), html, 'utf8');

  console.log('Generated', path.join(dist, 'index.html'));
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
