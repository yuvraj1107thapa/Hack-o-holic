const express = require("express");
const router = express.Router();
const User = require("../src/models/User");
const Contact = require("../src/models/Contactfrom")
const Sell=require("../src/models/sellfrom")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authorization = require("../src/middleware/auth");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
let path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
let upload = multer({ storage, fileFilter });

router.post("/signup", async (req, res) => {
    try {
      const { email, password, username } = req.body;
  
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ error: "Email already exists" });
  
      user = await User.findOne({ username });
      if (user) return res.status(400).send({ error: "Username already exists" });
  
      user = new User({ 
        username: username,
        email: email,
        password: password,
        
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      const savedUser=await user.save();
      if (!savedUser) {
        return res.status(400).send({ error: "Something went wrong" });
      }
      const token = await user.generateAuthToken()
      console.log("user registered");
      res.status(200).json({message:"User registered"});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });

  
  router.post("/login", async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Find User if Exist
        const user = await User.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcrypt.compare(password, user.password);

            if(isMatch){
                
                const token = await user.generateAuthToken();
                res.status(200).json({
                token, user: {id: user._id},
                });
                console.log("user logged in");
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})
                  /////////*******************///////////

// saving seller information
router.post('/sell',upload.single('image'), async (req, res)=>{
    try {
      const { description, product,cost,phonenumber,tags} = req.body;
      const image = req.file.filename;
        const sellinfo = new Sell({
          description:description, 
          product:product,
          cost:cost,
          phonenumber:phonenumber,
          tags:tags,
          image:image,
        }); 

        await sellinfo.save();
        console.log("Sell Information Sent");
        res.status(200).send("Sell Information Sent");

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    } 
})
//saving contactuser information
router.post('/contact', async (req, res)=>{
  try {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;

      const sendMsg = new Contact({
          name : name,
          // username: req.user.userId,
          email : email,
          message : message
      });

      await sendMsg.save();
      console.log("Message Sent");
      res.status(200).send("Message Sent");

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
})

//////////////*************** //////////////

// display seller information
router.get("/edit/:id", async (req, res) => {
     
  try{
        let id = req.params.id;
        const resource=await Sell.findById(id);
        res.json(resource);
  }
  catch(error){
        console.log(error);
  }
});
router.get("/editadmin/:id", async (req, res) => {
     
  try{
        let id = req.params.id;
        const resource=await Sell.findById(id);
        res.json(resource);
  }
  catch(error){
        console.log(error);
  }
});

router.post("/edit/:id",upload.single('image'), async (req, res) => {
  
  try{ 
        let id = req.params.id;
        const image = req.file.filename;
        const { description, product,cost,phonenumber,tags} = req.body;
        const saved = await Sell.findByIdAndUpdate(id, {
          description:description, 
          product:product,
          cost:cost,
          phonenumber:phonenumber,
          tags:tags,
          image:image,
    });
          await saved.save(function(err,doc){
              if(err) throw err;
              res.status(200).send("Sell Information updated");
          }); 
    }
    catch (error){
        console.log(error);
        res.send("Something went wrong. Try again");
    } 
});

router.get("/display", async(req,res)=>{
  try{
   const data=await Sell.find({});
  //  res.send(data)
   res.json(data);
  }catch(error){
    console.log(error);
    res.status(400).send(error);
  }
})


//display feedback information
router.get("/feedbackDisplay", async(req,res)=>{
  try{
   const displayUser=await Contact.find({});
   res.send(displayUser)
  }catch(error){
    console.log(error);
    res.status(400).send(error);
  }
})
//display user information
router.get("/userDisplay", async(req,res)=>{
  try{
   const displayUser=await User.find({});
   res.send(displayUser)
  }catch(error){
    console.log(error);
    res.status(400).send(error);
  }
})

 router.get("/", authorization, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
  username: user.username,
  id: user._id,
  });
  });

  router.post("/tokenIsValid", async (req, res) => {
    try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.userId);
    if (!user) return res.json(false);
    else return res.json(true);
    } catch (err) {
    return res.json(err);
    }
    });
module.exports = router;