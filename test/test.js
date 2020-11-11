// const request = require(‘supertest’);
// var app = require(‘../index.js’);

// describe(‘GET /’, function() {
//  it(‘respond with hello world’, function(done) {

//  request(app).get(‘/’).expect(‘hello world’, done);
//  });
// });

const request=require('supertest')
const app = require('../index.js')

descbe('GET /' ,function(){
    it('respond with hello world',function(done){
        request(app).get('/').expect('Hello World!',done);
    })
})

process.exit()
