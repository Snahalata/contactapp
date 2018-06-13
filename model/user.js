const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String}
});

var userModel = mongoose.model("user",userSchema);

module.exports = userModel;
