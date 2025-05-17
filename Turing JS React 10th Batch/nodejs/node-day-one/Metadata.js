import fs from "node:fs";
let stats = fs.statSync("write.txt");
console.log("isFile ", stats.isFile());
console.log("isDirectory ", stats.isDirectory());
console.log("size ", stats.size);
console.log("mode ", stats.mode);
console.log("birthtime", stats.birthtime)
 
