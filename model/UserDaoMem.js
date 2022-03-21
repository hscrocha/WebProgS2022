exports.users = [ //For this phase, we will store the data in memory, on the server
    { _id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    { _id:2,name:'John Dooey', login:'jd@aol.com', password:'123456', permission:2},
    { _id:3,name:'Jane Doe', login:'janed@compuserve.com' ,password:'123456', permission:2}
];

exports.readAll = function(){
    return exports.users;
}

exports.read = function(id){
    let index = pos(id);
    if(index >= 0) return exports.users[index];
    else return null;
}

exports.create = function(newuser){
    if(exports.users.length>0)
       newuser._id = (exports.users[exports.users.length-1]._id)+1;
    else
       newuser._id = 1;
    exports.users.push(newuser);
}

exports.del = function(id){
    let index = pos(id);
    let deleteduser = null;
    if(index >= 0){
        deleteduser = exports.users[index];
        exports.users.splice(index,1);
    }
    return deleteduser;
} 

exports.update = function(user){
    //leave as homework
}

function pos(id){
    for(let i=0; i<exports.users.length; i++){
        if(exports.users[i]._id === id){
            //found the user with id
            return i;
        }
    }
    return -1;
}
