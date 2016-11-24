var OperatorNode = require('../src/operatorNode.js');
var NumberNode = require('../src/numberNode.js');

var chai = require('chai');
var assert = chai.assert;

describe('operatorNode # representWithSymbols', function () {
    it('should return string representation of an operator', function () {
        var expression = new OperatorNode('-', new NumberNode('1'), new NumberNode('2'));
        assert.equal('( 1 - 2 )', expression.representWithSymbols());
    });

    it('should return string representation of an operator', function () {
        var expression = new OperatorNode('-',
            new OperatorNode('*', new NumberNode('5'), new NumberNode('4')),
            new OperatorNode('-', new NumberNode('10'), new NumberNode('4'))
        );
        assert.equal('( ( 5 * 4 ) - ( 10 - 4 ) )', expression.representWithSymbols());
    });


});

describe('operatorNode # representWithWords', function () {
    it('should return string representation of an operator node', function () {
        var expression = new OperatorNode('-', new NumberNode('1'), new NumberNode('2'));
        assert.equal('( one minus two )', expression.representWithWords());
    });

    it('should return string representation of an operator', function () {
        var expression = new OperatorNode('*', new NumberNode('5'), new NumberNode('4'));
        assert.equal('( five times four )', expression.representWithWords());
    });
});

describe('operatorNode # evaluate', function () {
    it('should operate based on the given expression and return result', function () {
        var expression = new OperatorNode('*', new NumberNode('5'), new NumberNode('5'));
        assert.equal(25, expression.evaluate());
    });
});