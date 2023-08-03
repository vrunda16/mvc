const express=require("express");
const connect = require("./config/db");
const router = require("./routes/student.route");
const app=express();
app.use(express.json());
app.use("/student",router)
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");

app.listen(9090,()=>{
    console.log("listening on port");
    connect();
})