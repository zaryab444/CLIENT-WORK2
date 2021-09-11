const express = require('express');
const app = express();

const chatroute = express.Router();
let Chat = require('../model/Chat');



// Send Chat
chatroute.route('/send').post((req, res, next) => {
  Chat.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// Get All Chat
chatroute.route('/allsend').get((req, res) => {
  Chat.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

chatroute.route('/delete/:id').delete((req, res, next) => {
  Chat.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = chatroute;
