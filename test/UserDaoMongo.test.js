const dbcon = require('../model/DbConnection');
const dao = require('../model/UserDaoMongo');

beforeAll(function(){
    dbcon.connect('test');
});
afterAll(async function(){
    await dao.deleteAll();
    dbcon.disconnect();
});
beforeEach(async function(){
    await dao.deleteAll();
});
afterEach(function(){
    //No need
});

test('Create new user test',async function(){
    let newdata = {name:'Test',login:'test@test.com',
                  password:'123456',permission:1};
    let created = await dao.create(newdata);
    let found = await dao.read(created._id);
    expect(created.login).toBe(found.login); //assertion
});

test('Read All', async function(){

});