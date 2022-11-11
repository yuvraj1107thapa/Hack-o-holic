const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
 
const sellSchema = new mongoose.Schema({ 
  description: {
    type: String,
    required:true,
  }, 
  product:{
    type: String,
    required: true, 
  }, 
  cost:{
    type: String,
    required: true, 
  },
  phonenumber:{
   type:String,
   required: true,
  },
  tags: {
    type: String,
    required:true,
  },
  image:{
    type:String,
  },
  // author: {
  //   type: ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});
module.exports = mongoose.model("Sell", sellSchema);
 