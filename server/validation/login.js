const validator = require('validator');
/**
 * @description validate the user input from the login form
 * @param {Object} data
 * @returns {Object} isValid errors  
 */
module.exports = function validateLoginInput(data) {
  let errors = {};
  //convert empty fields to a sting so we can use isEmpty
  if (data.email == undefined) data.email = "";
  if(data.password == undefined) data.password = "";
  data.email = validator.isEmpty(data.email)  ? "": data.email ;
  data.password = validator.isEmpty(data.password) ? "" : data.password ;
  //check for user input : Email
  if(validator.isEmpty(data.email)) errors.email = "Email field is required";
  else if(!validator.isEmail(data.email)) errors.email = "Email is invalid";

  //check for user input : Password
  if(validator.isEmpty(data.password)) errors.password = "Password is required";

  return {
    errors,
    isValid: (validator.isEmpty(errors.email ? errors.email : "") && validator.isEmpty(errors.password ? errors.password : ""))
  }
}