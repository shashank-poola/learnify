const express = require("express")

const app = express();

app.post("user/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.post("user/signin", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.get("user/purchases", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.get("course/purchases", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.get("/courses", (req, res) => {
    res.json({
        message: " all courses "
    })
})

app.listen(3000)
