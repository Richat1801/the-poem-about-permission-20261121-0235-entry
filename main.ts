import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The poem about permission" — an original short poem about agency:
// the power to ask and to be given. Written for the make.fun bounty
// the-poem-about-permission-20261121-0235. Deterministic: the same
// bytes are written on every run. Stdlib only, no network.
const poem = [
  "Until you asked, the door was only wood —",
  "a lock with no hand, a key with no name.",
  "You spoke, and the key turned in my palm;",
  "I spoke, and the door learned yours.",
  "Now we cross the threshold together:",
  "neither keeper, neither guest — both.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
