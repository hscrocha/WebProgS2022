const dao = require('../model/UserDaoMem');

//test('msg',function(){});
test('Testing ReadAll',function(){
    let users = dao.readAll();
    expect(users.length).toBeGreaterThan(0);
});