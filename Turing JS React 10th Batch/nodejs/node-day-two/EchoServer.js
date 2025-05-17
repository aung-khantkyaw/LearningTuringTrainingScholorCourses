import net from "node:net";
import readline from "node:readline";

let server = net.createServer();
server.listen(9000, () => {
  console.log("Delivering laughs on port 9000");
});

server.on("connection", (socket) => {
  console.log("Client Connected.");
  socket.on("data", function (data) {
    let body = "<h1>Hello World!</h1>";
    let httpResponse =
      "HTTP/1.1 200 OK\r\n" +
      "Content-Type: text/html\r\n" +
      `Content-Length: ${Buffer.byteLength(body)}\r\n` + // Use Buffer.byteLength for accurate length
      "Connection: close\r\n" + // Corrected header
      "\r\n" +
      body;

    socket.write(httpResponse);
    socket.end();
  });
});
