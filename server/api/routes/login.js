const express = require('express');
const router = express.Router();
const User = require('../models/User');
const validateLoginInput = require('../../validation/login');
/**
 * @route POST api/user/login
 * @desc login a registred user
 * @access public
 */
router.post('/login', (req, res) => {
  console.log("email server side :"+req.body.email);

  
  const {errors, isValid} = validateLoginInput(req.body);  
  if(!isValid) return res.status(400).json(errors);

  const Email = req.body.email;
  const Password = req.body.password;
  //get if the user exits 
  User.findOne({'email': Email}, (err,user) => {
      if(!user) return res.status(404).json({ emailnotfound: "email not found"});
      //check if the password matches
      //TODO: crypt the password in register phase
      if (user.password == Password) {
        // get the user to a page
        return res.status(200).json({success: true});      
      }else{
        return res.status(400).json({passwordincorrect: "Password incorrect"});
      }
      
      return res.status(4040).json({success: false, message: err.message});
  })
   
})
module.exports = router;