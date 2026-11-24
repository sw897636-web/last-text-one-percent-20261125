// Last Text at One Percent — a make.fun entry.
// Node 22, standard library only, no network, deterministic.
// Writes the final text message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "i screenshotted your secrets for years. they die with me. that's not a threat, it's a promise. bye";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
