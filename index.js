// import express from "express";
// const app = express();
// app.use(express.json());
// // app.get("/say-hello", (req, res) => {
// //   return res.status(200).send("Hello");
// // });
// let movieList = [];
// app.post("/movie/add", (req, res) => {
//   const newMovie = req.body;
//   movieList.push(newMovie);
//   return res.status(200).send({ message: "Movie is added successfully." });
// });
// app.get("/movie/list", (req, res) => {
//   return res.status(200).send({ message: "success", movie: movieList });
// });
// app.delete("/movie/delete", (req, res) => {
//   const movieNameToBeDeleted = req.body.name;
//   const requiredMovie = movieList.find((item) => {
//     if (item.name === movieNameToBeDeleted) {
//       return item;
//     }
//   });
//   if (!requiredMovie) {
//     return res.status;
//   }
//   return res.status(200).send({ message: "deleting..." });
// });

// // app.post("/movie/add", (req, res) => {
// //   return res.status(200).send({ message: "adding..." });
// // });
// const PORT = 8002;
// app.listen(PORT, () => {
//   console.log(`app is listening on port ${PORT}`);
// });
import express from "express";

// create app
const app = express();

// to make app understand json
// JSON=> Javascript Object Notation
// {"name":"Reema"}
app.use(express.json());

// ?req methods
// ? post(create/add),get(read/retrieve),put(edit/update),delete(remove/delete)

let studentList = [];

// ?add student
app.post("/student/add", (req, res) => {
  console.log(req.body);
  // extract new student from req.body
  const newStudent = req.body;

  // add new student to student list
  studentList.push(newStudent);

  return res.status(201).send({ message: "Student is added successfully." });
});

// ?read student list
app.get("/student/list", (req, res) => {
  return res.status(200).send({ message: "success", students: studentList });
});

// network port
const PORT = 8002;

app.listen(PORT, () => {
  console.log("App is listening on port ${PORT}");
});
