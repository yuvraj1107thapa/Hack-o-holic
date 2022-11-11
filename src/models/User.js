const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true, 
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
      },
    password:{
        type: String,
        required: true,
      },
    likes: [
        {
          type: ObjectId,
          ref: "Contactfrom",
        },
      ],
      sell: [
        {
          type: ObjectId,
          ref: "Sell",
        },
      ],
      contactfrom: [
        {
          type: ObjectId,
          ref: "Contactfrom",
        },
      ],
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
});
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({
      userId: user._id.toString()
  }, process.env.JWT_SECRET, {
      expiresIn: "30 days",
  });

  // doubt
  user.tokens = user.tokens.concat({
      token
  });
  await user.save();
  return token;
};
const User = new mongoose.model("User", userSchema);
module.exports = User;
