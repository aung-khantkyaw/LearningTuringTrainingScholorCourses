// const fs = require("node:fs");

import fs from "node:fs";

console.log("starting readFile");

async function write(fileName, text) {
  try {
    let data = await fs.promises.writeFile(fileName, text);
    console.log("File write done.");
  } catch (error) {
    console.log("Error ", error);
  }
}
write("./write.txt", "Hello World");

console.log("ending readFile");
 