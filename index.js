const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("Backend API");
});

const { checkSequelize, dbSequelize } = require("./src/config/db");
checkSequelize();
dbSequelize.sync();

const { usersRouter } = require("./src/routers");
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`Running API ${PORT}`));
