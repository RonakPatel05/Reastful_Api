const express = require("express");
const { default: mongoose } = require("mongoose");
const student = require("../model/student");
const { route } = require("../../app");
const router = express.Router();
const Student = require("../model/student");



router.get("/", (req, res, next) => {
    res.status(200).json({
      msg: "This is student get request",
    });
  Student.find()
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });
  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  console.log(req.body);
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id); 
  student
    .findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        student: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//delete the data
router.delete("/:id", (req, res, next) => {
  student
    .removeAllListeners({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "delete data",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

//put req
router.put("/:id", (req, res, next) => {
  console.log(req.params.id);
  Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        // _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated_data: result,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;



/*hashing mate
bcrypt.hash(req.body.password,10,(err,hash)=>{
  if(err){
    return res.status(500).json({
      error:err
    })
  }
  else{
    const user=new User({
      _id:new mongoose.Types.objeectId,
      username:req.body.username,
      password:hash,
      phone:req.body.phone,
      email:req.body.email,
      userType:req.body.userType
    })
    user.save()
    .then(result){
      res.status(200).json({
        new_user:result
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })
  }
})

*/