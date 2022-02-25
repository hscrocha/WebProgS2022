const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging

let port = 4000;
let hostname = 'localhost';

const app = express(); 
app.use(morgan('dev')); //logging

app.use(express.static('public_html'));

const users = [
{ _id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
{ _id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
{ _id:3,name:'Jane Doe', login:'janed@compuserve.com' ,password:'123456', permission:2}
];


app.get('/user',function(req,res){
    res.status(200); //Ok
    res.send(users);
    res.end();
});


app.listen(port,hostname,function(){
    console.log(`Server Running on ${hostname}:${port}...`);
});