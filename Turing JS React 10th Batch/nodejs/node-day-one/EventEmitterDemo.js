// function task() {
//   setTimeout(() => {
//     console.log("Task completed");
//     return 100;
//   }, 2000);
// }

import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();

function task() {
  setTimeout(() => {
    console.log("Task commpleted.");

    eventEmitter.emit("taskDone", {
      data: 100,
    });
  }, 2000);
}
eventEmitter.on("taskDone", (event) => {
  console.log("Task Done", event);
});

task();
console.log("Done");
