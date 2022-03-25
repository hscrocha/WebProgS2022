const dao = require('../model/UserDaoMem');

//test('msg',function(){});
test('Testing ReadAll',function(){
    let users = dao.readAll();
    expect(users.length).toBeGreaterThan(0);
});

test('Create User',function(){
    let newuser = {name:'Test',login:'test@test.com',
                  password:'123456',permission:1};
    let beforeSize = dao.readAll().length;
    let saved = dao.create(newuser);
    let users = dao.readAll();
    expect(users.length).toBe(beforeSize+1);
    expect(users).toContain(saved);
});

test('Useless Green Test',function(){
    expect(1).toBe(1);
});