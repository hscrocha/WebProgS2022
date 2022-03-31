const dbcon = require('../model/DbConnection');
const dao = require('../model/UserDaoMongo');

beforeAll(function(){
    dbcon.connect('test');
});
afterAll(function(){
    dbcon.disconnect();
});

test('Create new user test',async function(){
    let newdata = {name:'Test',login:'test@test.com',
                  password:'123456',permission:1};
    let user = await dao.create(newdata);

});