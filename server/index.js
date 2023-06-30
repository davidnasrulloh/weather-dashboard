const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/cities", require("../api/cities.js"));
app.use("/api/weather", require("../api/weathers.js"));

app.listen(PORT, () => {
  console.log(`Server runing on port http://localhost:${PORT}`);
});

module.exports = app;
