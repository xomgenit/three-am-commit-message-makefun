import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const subject = "fix: it worked on my machine, so I shipped it to prod.";
const confession = "it does not work on prod either.";
const punchline = "reverting is for cowards.";

const message = [subject, confession, punchline].join(" ");

if (message.length < 1 || message.length > 200) {
  throw new Error(`commit message must be 1-200 characters, got ${message.length}`);
}

if (message.includes("\n")) {
  throw new Error("commit message must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), message, "utf8");
console.log(`wrote entry.txt (${message.length} chars)`);
console.log("3 AM commit message ready — no rollback planned.");
