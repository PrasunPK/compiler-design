var Identifier = require('../src/identifier.js');
var OparetorNode = require('../src/operatorNode.js');
var NumberNode = require('../src/numberNode.js');

var assert = require('assert');

describe('Identifier', function () {
    it('test name', function () {
        var expression = new OparetorNode("+",new NumberNode("2"),new NumberNode("6"));
        var identifier = new Identifier("x", "=",expression);

        assert.equal(8,identifier.evaluate())
    });
});