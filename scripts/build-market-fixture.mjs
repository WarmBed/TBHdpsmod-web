// One-off: bake real tbh-market data into a static fixture so the /market terminal
// prototype can render real charts/orderbooks without a CORS proxy or the cron pipeline.
// Run: node scripts/build-market-fixture.mjs   (writes public/market/fixture.json)
import { writeFile, mkdir } from 'node:fs/promises';

const UA = 'TBH-DPS-site-fixture (one-off prototype seed)';
const ITEMS = 'https://tbh-market.com/api/items?page=1&pageSize=500';
const ITEM = 'https://tbh-market.com/api/item/';
const ORDERBOOK = 'https://tbh-market.com/api/orderbook/';
const LIST_N = 48;      // watchlist size
const DETAIL_N = 48;    // bake history+orderbook for all listed so every row is clickable

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function jget(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

const cat = await jget(ITEMS);
const all = (cat.items || []).slice().sort((a, b) => (b.volume || 0) - (a.volume || 0));

const list = all.slice(0, LIST_N).map((it) => ({
  hash: it.hash_name, name: it.name, nameJa: it.name_ja, color: it.name_color,
  icon: it.icon_url, type: it.type, gear: it.gear,
  price: it.sell_price, median: it.median_price, listings: it.sell_listings, vol: it.volume,
}));

const detail = {};
const targets = all.slice(0, DETAIL_N);
for (const it of targets) {
  const hash = it.hash_name;
  try {
    const resp = await jget(ITEM + encodeURIComponent(hash));
    const item = resp.item || resp;   // /api/item wraps the record in { item: {...} }
    await sleep(800);
    let ob = null;
    try { ob = await jget(ORDERBOOK + encodeURIComponent(hash)); } catch { /* ok */ }
    await sleep(800);
    let hist = [];
    try {
      const sh = JSON.parse(item.steam_history || '{}');
      hist = (sh.points || []).map((p) => [p.recorded_at, p.price, p.volume || 0]);
      detail[hash] = { cur: (sh.cur || ''), hist, orderbook: ob };
    } catch { detail[hash] = { cur: '', hist: [], orderbook: ob }; }
    console.log(`baked ${hash}: ${hist.length} pts, ob=${ob ? (ob.sell?.length || 0) + '/' + (ob.buy?.length || 0) : 'none'}`);
  } catch (e) {
    console.warn(`skip ${hash}: ${e.message}`);
  }
}

await mkdir('public/market', { recursive: true });
const out = { builtAt: Date.now(), total: cat.total, list, detail };
await writeFile('public/market/fixture.json', JSON.stringify(out));
console.log(`\nwrote public/market/fixture.json — ${list.length} list, ${Object.keys(detail).length} detail`);
