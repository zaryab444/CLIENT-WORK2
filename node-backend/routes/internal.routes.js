const express = require('express');
const app = express();


const internalRoute = express.Router();

let Internal = require('../model/Internal');


//Add Internal Request

internalRoute.route('/add-internal').post((req,res,next)=>{
  Internal.create(req.body,(error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  })
});

//Get All Internal Request
internalRoute.route('/internal').get((req, res) => {
  Internal.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


// Delete Internal Request
//http://localhost:8000/api/delete-internal/:id
internalRoute.route('/delete-internal/:id').delete((req, res, next) => {
  Internal.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = internalRoute;
