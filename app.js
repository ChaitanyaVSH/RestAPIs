var http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.write("In the HomeScreen");
    response.end();
  }

  if (request.url === "/api/courses") {
    response.write(JSON.stringify(["CSE", "IT", "ECE", "MECH", "CIVIL"]));
    response.end();
  }
});

server.listen(7000);

console.log("App Listening on 7000");
