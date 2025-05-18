import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import "dotenv/config";
import "./database.js";
import { User } from "./models/index.js";
import jwt from "jsonwebtoken";

// https://github.com/ahadsts9901/express-rate-lmiter

const app = express();
const port = process.env.PORT || 5002;

//

app.use(express.json()); // To convert body into JSON
app.use(
  cors({
    // credentials: true, // cookies
    // this is not security
    origin: [
      "http://localhost:5173",
      "https://frontend.surge.sh",
      "https://marvelous-capybara-0bee09.netlify.app",
    ],
    credentials: true,
  })
);

// middleware

app.use(async (req, res, next) => {
  const token = req.cookies;
  console.log("🚀 ~this >>> tokenVerification ~ token:", token);

  // console.log("req.cookies: ", token); //it's a security vulnerability to print token in production

  if (!token) {
    res
      .status(401)
      .send({ message: "Include http-only credentials with every request!" });
    return;
  }

  try {
    const decodedData = jwt.verify(token, "SECRET@!@#$549583ufdf"); // ye env ma save hoga

    console.log("token approved");

    req.body.decodedData = decodedData;

    next();
  } catch (err) {
    res
      .cookie("tokenName", "", {
        maxAge: 1, // try only clear cookie here // remove
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(401)
      .send({ message: "Invalid token!" });

    console.log("🚀 ~ tokenVerification.ts:22 ~ ~ err:", err);
  }
});
// middleware

// creating new account
app.post("/api/v1/signup", async (request, response) => {
  if (!request.body.name || !request.body.email || !request.body.password) {
    response.status(400).send({ message: "Parameters missing" });
    return;
  }

  const user = await User.findOne({ email: request.body.email });

  if (user) {
    response.status(400).send({ message: "Email already exist" });
    return;
  }

  // hashing is 1 way encryption
  const encryptedPassword = await bcrypt.hash(request.body.password, 10);

  const result = await User.create({
    name: request.body.name,
    email: request.body.email,
    password: encryptedPassword,
  });

  response.send({ message: "signup successfully", data: result });
});

app.post("/api/v1/login", async (request, response) => {
  const result = await User.findOne({ email: request.body.email });

  if (!result) {
    response.status(404).send({ message: "user not found" });
    return;
  }

  // console.log('req ka pwd:', request.body.password, ' ', 'database ma save pwd:', result.password);

  const match = await bcrypt.compare(request.body.password, result.password);

  // if (result.password !== request.body.password) {
  if (!match) {
    response.status(400).send({ message: "password galat hy" });
    return;
  }

  // npm i jsonwebtoken
  const token = jwt.sign(
    {
      _id: result._id,
      email: result.email,
    },
    "SECRET@!@#$549583ufdf", // ye env ma save hoga
    { expiresIn: "7d" }
  );

  response
    .cookie("my-token", token, {
      expires: new Date(Date.now() + 86400000 * 7),
      secure: true,
      httpOnly: true,
    })
    .send({ message: "login successfully" });
});

//

app.use((request, response) => {
  response.status(404).send({ message: "no route found!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
