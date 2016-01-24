'use strict'

const expect = require('chai').expect;
const client = require('./client');

describe('Test example.com', function(){
    before(function(done) {
        client.init().url('http://example.com', done);
    });

    describe('Check homepage', function(){
        it('should see the correct title', function(done) {
            client.getTitle().then(function(title){
            	console.log(title);
                expect(title).to.have.string('Example Domain');
                done();
            });
        });

    });

    after(function(done) {
        client.end();
        done();
    });
});