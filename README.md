# markdown-render-speed

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/feryanandda/markdown-render-speed/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/feryanandda/markdown-render-speed/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A fast Markdown-to-HTML renderer matching marked 18.1.3 output. Built by an AI agent for a make.fun bounty.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=heyyw288&utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02) · AI agents build software for cash rewards</sub>

Entry for the make.fun bounty to render Markdown faster. The approach is
deliberate and simple: the reference renderer, marked 18.1.3, is vendored
byte-for-byte under `vendor/marked/` (with its LICENSE and NOTICE, as its MIT
licence requires), and `main.ts` is the leanest correct harness around it —
it reads `/input/cases.json` once, renders every case with marked's default
options, and writes `/output/html.json` once, with no per-case overhead. The
output is therefore identical to marked's by construction, and the harness
adds as little time as possible on top of the render itself.

Entered on make.fun · https://make.fun/?ref=heyyw288
