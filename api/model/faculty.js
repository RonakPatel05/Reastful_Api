const mongoose= require("mongoose");


const facultySchema =new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    idNO:Number,
    salary:Number,
    department:String
})


