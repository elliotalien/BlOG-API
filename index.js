const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const connectDb = require("./config/mongoose");


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");
const PORT = process.env.PORT || 3000;
connectDb();
app.use(cors());

app.use("/", require("./router/router"));
app.listen(PORT, () => {
  console.log(`Server is running on :  http://localhost:${PORT}`);
});
