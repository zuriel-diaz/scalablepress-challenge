var expect 	= require('chai').expect;
var app 	= require('app');

describe('Random number feature test', function(){

	it('"N" must be greater than 0', function(){
		expect(app.randomNumber(5).to.equal(5));
	});

});