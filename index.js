const express = require("express");
const router = require("./router");
const app = express()


app.use("/app",router)


app.listen(8080,()=>{
    console.log("App running on port 8080");
})