const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.send("Hello Wolrd Co., Ltd.");
});

app.listen(PORT, () => {
  debug(`Listening on port${PORT}`);
});
