import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send({ message: "Hello World 1!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
