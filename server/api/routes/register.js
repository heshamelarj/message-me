const express = require('express');
const router = express.Router();
const User = require('../models/User');
const validateRegisterInput = require('../../validation/register');
/**
 * @route POST /api/user/register
 * @desc  register a user
 * @access public
 */
router.post('/register', (req, res) => {
  //check if the input is legits
  const {errors, isValid} = validateRegisterInput(req.body);
 
  console.log(isValid);
  
  if(!isValid) return res.status(400).json(errors);
  //get if the user exits 
  /*
    [Fields List]:  
    - username
    - email
    - password
    - avatar
    - isActive
    - createdOn
    - updatedOn
    - lastSeen
    - contacts
  */
  const Username = req.body.username;
  const Email = req.body.email;
  const Password = req.body.password;
  const Avatar = req.body.avatar ? req.body.avatar : "../../assets/avatars/";
   
  //creating the new user using the model
  const newUser = new User({
    username: Username,
    email: Email,
    password: Password,
    avatar: Avatar
  });
  //check if the email is registred
  User.findOne({'email':Email}, (err,user) => {
      if(user) return res.status(404).json({ useralreadyexists: "this user has an account"});
      //check if the password matches
      //TODO: crypt the password in register phase
       newUser.save((err) => {
         if(err) return res.status(404).json({confirmation: 'failed',message: err.message});
         return res.status(200).json({confirmation: 'success',message: 'user saved to db'})
       })
       
  })
   
})
module.exports = router;