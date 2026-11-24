// Last Text at One Percent — a make.fun entry.
// Node 22, standard library only, no network, deterministic.
// Writes the final text message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "this is his phone, not him. he texted you 'omw' 40 minutes ago from the couch. he is not omw. he has never been omw. i can't die with this on my conscience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
