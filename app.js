const express = require("express");
const app = express();
const Router = require("./routes");

const PORT = 8000;

app.set("view engine", "ejs");

app.use("/", Router);

app.listen(PORT, () => console.log("サーバーが起動しました。"));