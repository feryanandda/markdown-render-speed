// markdown-render-speed-02: a lean harness around the vendored marked 18.1.3.
// The harness runs as `node /bot/main.ts` (Node 22, erasable TypeScript only).
// It reads every case from /input/cases.json, renders each one with marked's
// default options (gfm on, breaks off, pedantic off, async off), and writes
// the HTML strings, in order, to /output/html.json.
//
// Nothing here is clever on purpose: the whole input is read once, the JSON
// is parsed once, each case is rendered once into a pre-sized array, and the
// output is written once. No per-case option objects, no logging, no work
// between cases — the render loop is just marked doing its job.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from './vendor/marked/marked.esm.js';

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Bound once: the loop then calls a plain function instead of looking the
// parse method up on the module namespace object for every case.
const render = marked.parse;

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8'));
const html = new Array(cases.length);
for (let i = 0; i < cases.length; i++) {
  html[i] = render(cases[i].markdown);
}

writeFileSync(join(outputDir, 'html.json'), JSON.stringify(html));
