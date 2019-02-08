let mongoose = require('mongoose');
let validator= require('validator');
//creating a schema

//creating the user schema

let UserSchema= new mongoose.Schema({
  username : {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  }
  ,
  password:{
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '../../assets/avatars/'
  },
  isActive: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  updatedOn: {
    type: Date,
    default: null,
  },
  lastSeen: {
    type: Date,
    default: null,
  },
  contacts:{
    type: Array,
    default: []
  }
}
,{collection: 'Users'}
);

module.exports = mongoose.model("User", UserSchema);
