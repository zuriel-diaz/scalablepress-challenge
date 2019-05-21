var assert 	= 	require('chai').assert;
var expect 	= 	require('chai').expect;
var math 	=	require('../math');

describe('Random Number', function() {
  describe('#Acceptance criterias', function() {
    
    it('The random number generated must be less than input N.', function() {
    	var number = math.flip();
    	assert.isAbove(number, math.randomNumber(number) );
    });

    it('"N" must be greater or equal than 0.', function(){
    	var number = math.flip();
    	assert.isAbove(math.randomNumber(number), 0 );
    });

  });
});