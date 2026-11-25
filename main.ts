// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt.
// The joke is the whole entry: a father, a ladder, a barbecue, and a double
// pun on "steaks" / "stakes" that lands at the very end, told out loud.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked why I always bring a ladder to the barbecue. I said, 'Because the steaks are high, son — and somebody's got to raise them.'";

// Entry gate: the joke must be exactly one line of 1-200 characters.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}.`);
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
