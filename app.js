const express = require("express");
const app = express();
const indexRouter = require("./routes");
const authRouter = require("./routes/auth");
const sampleRouter = require("./routes/sample");

const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.json());
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/sample", sampleRouter);

app.listen(PORT, () => console.log("サーバーが起動しました。"));