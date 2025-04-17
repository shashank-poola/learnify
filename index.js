const express = require("express");
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { courseRouter } = require("./routes/admin")
const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("./api/v1/admin", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000)
