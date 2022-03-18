const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging

let port = 4000;
let hostname = 'localhost';

const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));// Static server use the folder 'public_html'

const users = [ //For this phase, we will store the data in memory, on the server
    { _id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    { _id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
    { _id:3,name:'Jane Doe', login:'janed@compuserve.com' ,password:'123456', permission:2}
];

app.get('/user',function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(users); //send the users back to the client
    res.end(); 
});

app.get('/user/:id',function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = parseInt( req.params.id ); //get param and convert to int
    let found = null; //the found user
    for(let i=0; i<users.length; i++){ //iterate the array looking for the id
        if(users[i]._id === id){ //found a match
            found = users[i]; //copy the user to found
            break; //stop the loop
        }
    }

    if(found !== null){ //We found the requested user
        res.status(200); //200 = OK
        res.send(found); //Send the found user
    }
    else{ //The requested id does not exist
        res.status(404); //404 = Not Found
        res.send({msg:'User not found.'}); //send a message
    }
    res.end(); //ends the response (only 1 end per response)
}); //end of app.get(user/id)

app.post('/user',function(req,res){
    let newuser = {}; //empty obj
    newuser.name = req.body.txt_name;
    newuser.login = req.body.txt_login;
    newuser.password = req.body.txt_pass;
    newuser.permission = parseInt(req.body.txt_perm);

    if(req.body.txt_id){
        //update user
        console.log('Update user');
    }
    else{
        //insert user
        
        //Generates the ID
        if(users.length>0) newuser._id = (users[users.length-1]._id)+1;
        else newuser._id = 1;
        
        users.push(newuser); //inserts user into our array
    }
    res.redirect('users.html');
}); //end of app.post(user)

app.get('/deluser/:id',function(req,res){
    //URL parameter always on req.params.<name>
    let id = parseInt( req.params.id ); //get param and convert to int    

    let index = -1;
    for(let i=0; i<users.length; i++){ //searches for the id
        if(users[i]._id === id ){ //found id...
            index = i; //... save array index
            break;
        }
    }

    if(index >= 0){ //Index valid because we found Id
        users.splice(index,1); //remove 1 element at the index
    }
    res.redirect('../users.html');
}); //end of app.get(deluser)

app.post('/updateuser',function(req,res){
    //Not being called, the fronst sends to the same function as the create new user

    let user = {}; // empty object
    user.name = req.body.txt_name; 
    user.login = req.body.txt_login; 
    user.password = req.body.txt_pass;
    user.permission = parseInt(req.body.txt_perm);
    user._id = parseInt(req.body.txt_id);
    for(let i=0; i<users.length; i++){//find the user
       if(users[i]._id===user._id){ users[i] = user; break; }
    }
    res.redirect('user.html'); // go to 'user.html'
}); // end of app.post(updateuser)


app.listen(port,hostname,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${hostname}:${port}...`);
});