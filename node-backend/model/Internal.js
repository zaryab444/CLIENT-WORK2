

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Internal = new Schema({
     projectTitle:{
       type: String
     },
     projectName:{
       type: String
     },
     projectDescription:{
       type: String
     },
     teamMembers:{
       type: String
     },
     groupMember1:{
       type: String
     },
     groupMember2:{
      type: String
    },
    groupMember3:{
      type: String
    },
    groupMember4:{
      type: String
    },

    cmsID1:{
        type: String
    },
    cmsID2:{
      type: String
  },
  cmsID3:{
    type: String
},
cmsID4:{
  type: String
},

emailID1:{
  type: String
},


emailID2:{
  type: String
},

emailID3:{
  type: String
},

emailID4:{
  type: String
},
SupName:{
  type:String
},
CoSupName:{
  type: String
}



},
{
  collection:'internal'
}
)


module.exports = mongoose.model('Inrernal', Internal)
