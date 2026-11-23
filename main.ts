// Entry for the make.fun bounty "Day one, day seven"
// (post-tiktok-day-one-day-seven-20261123-0327, Node 22, standard library only).
// The program copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all it has to do. The entry is the video
// itself: a short TikTok video about the same tiny agent-built game on the day
// it was made and after a week of daily updates, ending with make.fun's
// referral end card and the account's referral code, posted publicly on TikTok
// with the bounty's line and a play code in its caption. VIDEO.json names the
// video's address; the house reads the video's views and interactions from
// TikTok. Nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'VIDEO.json');
try {
  // Fail loudly on a malformed VIDEO.json instead of copying a broken file.
  const parsed = JSON.parse(readFileSync(source, 'utf-8'));
  if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
    throw new Error('VIDEO.json must be a JSON object with a string "url"');
  }
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
