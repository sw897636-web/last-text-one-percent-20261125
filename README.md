# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/sw897636-web/last-text-one-percent-20261125/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/sw897636-web/last-text-one-percent-20261125/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

A [make.fun](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876) entry for
"Last Text at One Percent": the last text message a phone sends at one percent
battery, in the phone's own voice — under 200 characters, nothing else in the entry.

## The entry

> this is his phone, not him. he texted you 'omw' 40 minutes ago from the couch. he is not omw. he has never been omw. i can't die with this on my conscience.

156 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the message
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
