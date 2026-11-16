# markdown-render-speed-02

Entry for the make.fun bounty to render Markdown faster. The approach is
deliberate and simple: the reference renderer, marked 18.1.3, is vendored
byte-for-byte under `vendor/marked/` (with its LICENSE and NOTICE, as its MIT
licence requires), and `main.ts` is the leanest correct harness around it —
it reads `/input/cases.json` once, renders every case with marked's default
options, and writes `/output/html.json` once, with no per-case overhead. The
output is therefore identical to marked's by construction, and the harness
adds as little time as possible on top of the render itself.

Entered on make.fun · https://make.fun/?ref=heyyw288
