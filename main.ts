// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes a single horror sentence (under 200 characters) to entry.txt
// in the output directory the grader provides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The coroner swore my father died smiling, but the autopsy photo shows him screaming \u2014 and its date stamp is tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate refuses anything outside 1..200 characters, so fail loudly
// here instead of shipping an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1..200`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt (${LINE.length} characters) to ${outDir}`);
