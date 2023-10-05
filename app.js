const express = require("express");
const app = express();
const studentRoute=require("./api/routes/student");
const facultyRoute=require("./api/routes/faculty");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
// const { connected } = require("process");


mongoose.connect('mongodb+srv://Ronak_Patel:icegolastring1573@cluster0.ae4ldxe.mongodb.net/')
    

mongoose.connection.on('error',err=>{
    console.log("connection failed");
});

mongoose.connection.on('connected',connected=>{
    console.log("connected with database.....");
});

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

app.use("/student",studentRoute)
app.use("/faculty",facultyRoute)



app.use((req,res,next)=>{
    res.status(404).json({
        Error:"Bad Request"
    })
})

module.exports=app;