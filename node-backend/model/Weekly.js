
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Weekly = new Schema({

Pickerdate :{
  type: Date
},
time : {
  type : Date,
  default: Date.now },

SupName :{
  type: String
},
Cosupname:{
  type: String
},

StudentName:{
  type:String
},

projTitle:{
  type:String
}



},
{
  collection: 'weekly'
})
module.exports = mongoose.model('Weekly', Weekly)
