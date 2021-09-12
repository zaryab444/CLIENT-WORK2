const express = require('express');
const app = express();

const proposalRoute = express.Router();

let Proposal = require('../model/Proposal');

//Add Proposal
//http://localhost:8000/api/add-prop
proposalRoute.route('/add-prop').post((req,res,next)=>{
  Proposal.create(req.body,(error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  })
});

//Get All Proposal
//http://localhost:8000/api/prop
proposalRoute.route('/prop').get((req, res) => {
  Proposal.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


// Delete Proposal
//http://localhost:8000/api/delete-prop/:id
proposalRoute.route('/delete-prop/:id').delete((req, res, next) => {
  Proposal.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = proposalRoute;
