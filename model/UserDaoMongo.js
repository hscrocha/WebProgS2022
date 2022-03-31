// Call DBConnection on the Server.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: { type:String, alias:'email', required:true },
    password: String,
    permission: Number,
    creation: { type:Date, default:Date.now } 
});

const userModel = mongoose.model('user',userSchema);

exports.readAll = async function(){
    let users = await userModel.find();
    // Later try: find().sort({name:'asc'}).skip(0).limit(5);
    return users;
}

exports.read = function(id){
}

exports.create = async function(newuser){
    const user = new userModel(newuser);
    await user.save();
    return user;
}

exports.del = function(id){
} 

exports.update = function(user){
    //leave as homework
}


