console.log("Server is on");

const express = require("express");
const userRoutes = require("./routes/user");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/users",userRoutes);

app.get("/get", (req, res) => {
  res.send("hello user!");
});

app.get("/getAllUsers", (req, res) => {
  res.send({ message: "Some Users" ,data : data });
});

app.post("/createUser", (req, res) => {
  console.log(req.body);
  res.send({ data: req.body });
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});