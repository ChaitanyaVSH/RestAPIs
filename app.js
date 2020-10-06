var http = require("http");
const express = require("express");
const app = express();
const port = process.env.port || 1234;

// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  /**
   * app.get("URL", "CALLBACK Function")
   * http://expressjs.com/en/4x/api.html#req
   *
   * Documentation for the Express requests
   */

  res.send("Hello Maverick");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(["CSE", "IT", "ECE", "MECH", "CIVIL", "BIO"]));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

// const server = http.createServer(function (request, response) {
//   if (request.url === "/") {
//     response.write("In the HomeScreen");
//     response.end();
//   }

//   if (request.url === "/api/courses") {
//     response.write(
//       JSON.stringify(["CSE", "IT", "ECE", "MECH", "CIVIL", "BIO"])
//     );
//     response.end();
//   }
// });

// server.listen(7000);

// console.log("App Listening on 7000");
