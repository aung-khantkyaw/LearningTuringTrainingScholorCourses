import { parentPort, workerData } from "node:worker_threads";

console.log("worker threads loaded...");
parentPort.postMessage(workerData.num * workerData.num);
