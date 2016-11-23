var assert = require('assert');

var parser = require('../src/parser.js')

describe.skip('parser', function(){
	it('should parse the given tree', function(){
		var parseTree = { parent: { symbol: '+', value: 'plus', type: 'operator' },
			leftChild: { symbol: '1', value: 1, type: 'number' },
			rightChild: { symbol: '2', value: 2, type: 'number' } };

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

describe.skip('createNodes',function(){
	it('should give a richer parse tree',function(){
		var parseTree = {
			parent : '+',
			leftChild : '1',
			rightChild : '2'
		};

		var actual = parser.createNodes(parseTree);
		var expected = { parent: { symbol: '+', value: 'plus', type: 'operator' },
			leftChild: { symbol: '1', value: 1, type: 'number' },
			rightChild: { symbol: '2', value: 2, type: 'number' } };

		assert.deepEqual(expected, actual);
	});
});

