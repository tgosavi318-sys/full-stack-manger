require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
mongoose.connect(process.env.MONGO_URL)

app.use("/", (req, res))=> {
    res.status(200).json({ message: "task msnger api Running...." })
}

mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, () => {
        console.log("SERVER RUNNING")
        console.log(`mode:${}`);


    })
})
module.exports = app