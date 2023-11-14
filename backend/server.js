require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/data");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

// middleware
/*const corsOptions = {
  origin: "http://localhost:3000", // frontend URI (ReactJS)
};*/

const corsOptions = {
  origin: "https://psych-survey.onrender.com", // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/data", dataRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
