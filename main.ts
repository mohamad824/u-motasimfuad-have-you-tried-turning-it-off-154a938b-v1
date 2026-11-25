// Entry for make.fun bounty "Have You Tried Turning It Off?"
// Writes one funny tech-support line to /output/entry.txt.
// Deterministic: standard library only, no network, no randomness, no dates.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Have you tried turning yourself off and on again? Go home, sleep for eight hours, and try the presentation again tomorrow. The board will understand.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");
