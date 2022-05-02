const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging
const session = require('express-session');
const cors = require('cors');
const memorystore = require('memorystore')(session);
const userCont = require('./controller/UserController');
const langCont = require('./controller/LanguageController');

const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(session({
    secret: 'Pineapple - Guava - Orange',
    cookie: {maxAge: 86400000 }, // = 1000*60*60*24 = 24Hours
    store: new memorystore({ checkPeriod:86400000 }),
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('view/build'));// Static server use the folder 'public_html'
app.use(express.static('public_html'));// Static server use the folder 'public_html'

// User Actions
app.get('/user', userCont.getAll );
app.get('/user/:id',userCont.get );
app.post('/user',userCont.postCreateOrUpdate); 
app.get('/deluser/:id',userCont.deleteOne); 
app.post('/updateuser',userCont.postCreateOrUpdate);
app.post('/dologin',userCont.login); 
app.get('/loggedUser',userCont.loggedUser);
app.get('/logout',userCont.logout);

app.get('/changelang/:lang',langCont.changeLanguage);
app.get('/language',langCont.getLanguage);
// Example Actions
//app.get('/example', exCont.getAll);

exports.app = app;