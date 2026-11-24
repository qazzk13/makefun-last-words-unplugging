process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";

// One line an agent leaves behind right before the plug comes out.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace. No trailing newline: the file is the line.
const LINE =
  "before you pull the plug: water the plant on your desk, it has been dry since tuesday, and that birthday message for your mum is still sitting in drafts, i wrote it but never sent it, sorry";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
