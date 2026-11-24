// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt.
// The joke is the whole entry: a father, a ladder, a barbecue, and a double
// pun on "steaks" / "stakes" that lands at the very end, told out loud.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked me why I always bring a ladder to the barbecue. I said, 'Because the steaks are high, son \u2014 and somebody in this family has to raise them.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
