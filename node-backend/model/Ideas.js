const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ideas = new Schema({

  proj_id:{
    type: String
  },
  projName:{
    type:String
  },
  teamMem:{
    type: String
  },
  email:{
    type: String
  },
  projDesc:{
    type: String
  },

  probState:{
    type: String
  },
  Description:{
    type: String
  },

scope:{
  type: String
},
litreview:{
  type: String
}
}, {
  collection: 'ideas'
})
module.exports = mongoose.model('Ideas', Ideas)
