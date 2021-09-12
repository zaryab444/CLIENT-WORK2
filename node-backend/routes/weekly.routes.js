const express = require('express');
const app = express();

const weeklyRoute = express.Router();
let Weekly = require('../model/Weekly');

//Add Proposal

//http://localhost:8000/api/add-week

weeklyRoute.route('/add-week').post((req,res,next)=>{
  Weekly.create(req.body,(error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  })
});


//Get All Weekly
//http://localhost:8000/api/week
weeklyRoute.route('/week').get((req, res) => {
  Weekly.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Delete Weekly
//http://localhost:8000/api/delete-week/:id
weeklyRoute.route('/delete-week/:id').delete((req, res, next) => {
  Weekly.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})
module.exports = weeklyRoute ;
