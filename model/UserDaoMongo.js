const dbcon = require('./DbConnection');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: { type:String, alias:'email', required:true },
    password: String,
    permission: Number,
    creation: { type:Date, default:Date.now } 
});

