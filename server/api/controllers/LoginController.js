const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config/config');
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
  User.findOne({'email': Email}, (error,user) => {
      if(!user) return res.status(404).json({ emailnotfound: "email not found"});
      //check if the password matches
      //TODO: crypt the password in register phase : DONE
      bcrypt.compare(Password, user.password).then(isMatch => {

        if(isMatch) {
          // create the payload
          const payload = {
            id: user.id,
            username: user.username
          };
          //Asign the token
          jwt.sign(payload,config.secret,{
            expiresIn: 5256000 //two mounths in seconds
          },
          (err, token) => {
            if(err) return res.status(500).json({auth:false, error: err});
            return res.status(200).json({auth: true,token: "Bearer "+token})
          })
        }else{
          return res.status(400).json({passwordincorrect: "Password incorrect"});
        }
      })
    
  })
   
})
module.exports = router;