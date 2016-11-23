var fs = require('fs');
var assert = require('assert');
var Parser = require('jison').Parser;
var path = require('path');
describe('grammar', function(){

    var grammar = fs.readFileSync(path.resolve('./grammar.jison'), 'utf-8');
    var parser = new Parser(grammar);

    it('should process an expression and represent it in symbols', function(){
        var expression = "1+2";
        var expected = "( 1 + 2 )";
        var result = parser.parse(expression);
        assert.equal(expected,result.representWithSymbols());
    });

    it('should process an expression and represent it in words', function(){
        var expression = "1+2";
        var expected = "( one plus two )";
        var result = parser.parse(expression);
        assert.equal(expected,result.representWithWords());
    });
});