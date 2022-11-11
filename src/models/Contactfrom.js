const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ContactSchema = new mongoose.Schema({
//  username: {
//     type: ObjectId,
//     ref: "User",
//     required: true,
//   },

  name:{
    type:String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  }, 
  message: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Contactfrom", ContactSchema);
