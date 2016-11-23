var NumberNode = require('../src/numberNode.js');
var chai = require('chai');
var assert = chai.assert;

describe('numberNode # representWithWords', function(){
	it('should give the word representation of single digit number', function(){
		var two = new NumberNode("2");
		assert.equal("two",two.representWithWords());
	});

	it('should give the word representation of a million number', function(){
		var two = new NumberNode("2000000");
		assert.equal("two million",two.representWithWords());
	});
});