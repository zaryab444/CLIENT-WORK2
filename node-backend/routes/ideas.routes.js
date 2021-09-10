const express = require('express');
const app = express();

const ideasRoute = express.Router();
let Ideas = require('../model/Ideas');


//Add Ideas Request

ideasRoute.route('/add-Ideas').post((req,res,next)=>{
  Ideas.create(req.body,(error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  })
});

//Get All Ideas Request
ideasRoute.route('/ideas').get((req, res) => {
  Ideas.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Get Idea
ideasRoute.route('/read-ideas/:id').get((req, res) => {
  const id = req.params.id;
  Ideas.findById(id,function(err,   customerResponse){
    if(err){
      res.send({status: 500, message:'Unable to Find customer'});

    }
    else{
      res.send({status: 200, results: customerResponse});
    }
  // Ideas.findById(req.params.id, (error, data) => {
  // if (error) {
  //   //return next(error)
  //   res.send({status: 500, message:'Unable to Find customer'});
  // } else {
  // //  res.json(data)
  // res.send({status: 200, results: customerResponse});
  // }


  // if(err){
  //   res.send({status: 500, message:'Unable to Find customer'});

  // }
  // else{
  //   res.send({status: 200, results: customerResponse});
  // }
})
})



// Delete Ideas Request
//http://localhost:8000/api/delete-Ideas/:id
ideasRoute.route('/delete-ideas/:id').delete((req, res, next) => {
  Ideas.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = ideasRoute;
