const mongoose = require("mongoose");
mongoose
  .connect(
    // "mongodb+srv://NITSOLX:nitsolx@cluster0.2rfwt.mongodb.net/usermernstack?retryWrites=true&w=majority",
    "mongodb+srv://Yuvraj:yuvraj++@cluster0.bzpax.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongo db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
