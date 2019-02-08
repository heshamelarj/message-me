const validator = require('validator');
/**
 * @description validate the user input from the register form
 * @param {Object} data
 * @returns {Object} isValid errors  
 */
module.exports = function validateRegisterInput(data) {
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
  let errors = {};
  


  //convert empty fields to a sting so we can use isEmpty
  if(data.username == undefined) data.username = "";
  if (data.email == undefined) data.email = "";
  if (data.password == undefined) data.password = "";

  data.username = validator.isEmpty(data.username) ? "" : data.username;
  data.email = validator.isEmpty(data.email) ? "" : data.email;
  data.password = validator.isEmpty(data.password) ? "" : data.password;
  //check username
  if(validator.isEmpty(data.username)) errors.username = "username is required";
  //check email
  if (validator.isEmpty(data.email)) errors.email = "Email field is required";
  else if (!validator.isEmail(data.email)) errors.email = "Email is invalid";
  //check password
  if (validator.isEmpty(data.password)) errors.password = "Password is required";  
  return {
    errors,
    //destrocting the errors object because the isEmpty method accept only string not objects
    isValid: (validator.isEmpty(errors.username ? errors.username : "") && 
              validator.isEmpty(errors.email ? errors.email : "") &&
              validator.isEmpty(errors.password ? errors.password : ""))
  }
}