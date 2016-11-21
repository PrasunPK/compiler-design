var chai = require('chai');
var assert = chai.assert;

var parser = require('../src/parser.js')

describe('parser', function(){
	it('should parse the given tree', function(){
		var parseTree = {
			parent : '+',
			leftChild : 1,
			rightChild : 2 
		}

		var actualRepresentation = parser.parse(parseTree);
		var expectRepresentation = '(1+2)';
		assert.equal(expectRepresentation, actualRepresentation);
	});

	it('should parse the given tree with child being parent', function(){
		var parseTree = {
			parent : '+',
			leftChild : { 
				parent : '-', 
				leftChild : 3,
				rightChild : 2
			},
			rightChild : 2 
		}

		var actualRepresentation = parser.parse(parseTree);
		var expectRepresentation = '((3-2)+2)';
		assert.equal(expectRepresentation, actualRepresentation);
	});
});