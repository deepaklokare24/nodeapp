const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json()); // adding a middleware to convert request body

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

const schema = Joi.object({
  name: Joi.string().min(3).required(),
});

app.get("/", (req, res) => {
  console.log("Received request");
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course)
    return res.status(404).send("The course with given id does not exists!");

  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course)
    return res.status(404).send("The course with given id does not exists!");

  const { error, value } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const id = req.params.id;
  const index = courses.findIndex((c) => c.id === parseInt(id));
  const course = courses[index];

  if (!course)
    return res.status(404).send("The course with given id does not exists!");

  courses.splice(index, 1);
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  const output = {
    params: req.params,
    queryStrings: req.query,
  };
  res.send(output);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
