var jwt = require("jsonwebtoken");
var User = require("../models/User");
 
module.exports = async (req, res, next) => {
  try{
    const token = req.header("x-auth-token");
    if(!token)
    return res.status(401).json({msg: "No authentication token, access denied"});
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified)
    return res.status(401).json({msg: "Token verification failed, authorization denied"});
    req.user = verified.userId;
    next();
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};