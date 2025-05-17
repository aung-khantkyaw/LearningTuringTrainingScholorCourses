import http, { request } from "node:http";
import url from "node:url";
import path from "node:path";

let port = 9000;
let server = new http.Server();
server.listen(port);

console.log("Listening on port ", port);

server.on("request", (req, res) => {
  let endpoint = url.parse(req.url).pathname;
  console.log("Client connected to server endpoint ", endpoint);
  res.writeHead(200);
  res.end("Hello World!");
});
