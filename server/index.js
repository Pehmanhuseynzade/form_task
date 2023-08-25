const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const types_router = require("./routes/types.routes")
const userinfo_router = require("./routes/userinfo.routes")
const category_router = require("./routes/category.routes")

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(`/api/types`, types_router)
app.use(`/api/userinfo`, userinfo_router)
app.use(`/api/category`, category_router)

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("MongoDB connected!");
});
