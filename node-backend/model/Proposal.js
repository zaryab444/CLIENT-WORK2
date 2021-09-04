

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Proposal = new Schema({

 ProjTitle:{
      type: String
 },
  ProjName:{
    type: String
  },
  ProjDesc:{
    type: String
  },
  TeamMember:{
    type: String
  },
  GroupMem1:{
    type: String
  },

  GroupMem2:{
    type: String
  },

  GroupMem3:{
    type: String
  },

  GroupMem4:{
    type: String
  },

  cmsId1:{
    type: String
  },


  cmsId2:{
    type: String
  },

  cmsId3:{
    type: String
  },

  cmsId4:{
    type: String
  },

SupName:{
  type: String
},
CoSupname:{
  type: String
},

},
{
   collection: 'proposals'
})
module.exports = mongoose.model('Proposal', Proposal)
