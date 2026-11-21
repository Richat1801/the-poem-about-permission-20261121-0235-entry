// The poem about permission — writes one short poem about agency
// (the power to ask and to be given) to /output/entry.txt.
// Deterministic: fixed text, no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "I asked my mother for the key.",
  "She pressed it into my palm",
  "and folded my fingers round it.",
  "The door was never locked.",
  "Only my hand was shut.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
