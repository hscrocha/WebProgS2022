require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = function(){
    mongoose.connect(process.env.DB_URI,function(err){
        if(err) console.log(err);
    });
}

exports.disconnect = async function(){
    await mongoose.connection.close();
}
