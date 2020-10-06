var http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 1234;

const courses = [
  { id: 1, name: "Complete Node" },
  { id: 2, name: "Complete ReactJS" },
  { id: 3, name: "Complete Flutter" },
];

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
  res.send(JSON.stringify(courses));
});

app.get("/api/courses/:id", (req, res) => {
  //   const id = req.params.id;
  //   const course = courses[id - 1];

  const course = courses.find((c) => c.id === parseInt(req.params.id));
  /**
   * If the requested resource is not found, it's better to send a 404 status code as below.
   */
  if (!course)
    res.status(404).send("The Course with the given ID is not found");

  res.send(`The Course name is ${course.name}`);
});

app.get("/api/courses/:year/:month", (req, res) => {
  const year = req.params.year;
  const month = req.params.month;

  //res.send(`Looking for ${year} and ${month}`);
  res.send(req.query);
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
