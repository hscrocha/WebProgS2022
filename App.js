const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging
const userCont = require('./controller/UserController');

const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));// Static server use the folder 'public_html'

// User Actions
app.get('/user', userCont.getAll );
app.get('/user/:id',userCont.get );
app.post('/user',userCont.postCreateOrUpdate); 
app.get('/deluser/:id',userCont.deleteOne); 
app.post('/updateuser',userCont.postCreateOrUpdate); 

// Example Actions
//app.get('/example', exCont.getAll);

exports.app = app;