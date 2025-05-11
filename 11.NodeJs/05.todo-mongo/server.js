import express from "express";
import cors from "cors";
import "dotenv/config";
import "./database.js";
import { Todo } from "./models/index.js";
import { todoZodSchema } from "./zod.js";

// https://github.com/ahadsts9901/express-rate-lmiter

const app = express();
const port = process.env.PORT || 5002;

//

app.use(express.json()); // To convert body into JSON
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://frontend.surge.sh",
      "https://marvelous-capybara-0bee09.netlify.app",
    ],
  })
);

app.get("/api/v1/todos", async (_, response) => {
  try {
    const todos = await Todo.find(
      {},
      {
        ip: 0,
        __v: 0,
        updatedAt: 0,
      }

      // 1 wali field include hogi
      // 0 wali field exclude hogi
      // ya tw saari field 1 hogi ya tw saari field 0 hogi
      // same time 0 and 1 nahi ho sakti
    );

    const message = !todos.length ? "todos empty" : "ye lo sab todos";

    response.send({ data: todos, message: message });
  } catch (err) {
    response.status(500).send("Internal server error");
  }
});

// server per sensitive information print nhi karwaty

// naya todo bannae ko
app.post("/api/v1/todo", async (request, response) => {
  try {
    const zodResult = todoZodSchema.safeParse(request.body);
    // ye zod ki validation hy agar ye pass hogi to agy jae ga warna error dega

    if (!zodResult.success) {
      return response.status(400).send({
        message: zodResult.error.issues[0].message,
        errors: zodResult.error.issues,
      });
    }

    const obj = {
      todoContent: zodResult.data.todo,
      ip: request.ip,
    };

    const result = await Todo.create(obj);

    response.send({ message: "todo add hogya hy", data: result });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// ye todo ko update ya edit karne ki api ki
app.patch("/api/v1/todo/:id", async (request, response) => {
  const id = request.params.id;

  const result = await Todo.findByIdAndUpdate(
    id,
    { todoContent: request.body.todoContent },
    { new: true }
  );

  console.log("result=>", result);

  if (result) {
    response.status(204).send({
      data: result,
      message: "todo updated successfully!",
    });
  } else {
    response.status(200).send({ data: null, message: "todo not found" });
  }
});

app.delete("/api/v1/todo/:id", async (request, response) => {
  const id = request.params.id;

  const result = await Todo.findByIdAndDelete(id);

  if (result) {
    response.status(201).send({
      // data: { todoContent: request.body.todoContent, id: id, },
      message: "todo deleted successfully!",
    });
  } else {
    response.status(200).send({ data: null, message: "todo not found" });
  }
});

//

app.use((_, response) => {
  response.status(404).send({ message: "no route found!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
