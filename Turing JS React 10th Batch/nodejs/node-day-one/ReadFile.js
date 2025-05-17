// const fs = require("node:fs");

import fs from "node:fs";

console.log("starting readFile");

// fs.readFile("./hello.js", "utf-8", (err, data) => {
//   if (!err) {
//     console.log("File read done ", data.toString());
//   } else {
//     console.log("Error ", err);
//   }
// });

// fs.promises.readFile('./hello.js', 'utf8')
//     .then(data => console.log('File read done ', data.toString()),
//         err => console.log('Error ', err));

async function read(fileName) {
  try {
    let data = await fs.promises.readFile(fileName, "utf8");
    console.log("File read done ", data.toString());
  } catch (error) {
    console.log("Error ", error);
  }
}
read("./hello.js");

console.log("ending readFile");
