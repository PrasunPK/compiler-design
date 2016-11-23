var converter = require('number-to-words');

var NumberNode = function(value){
		this.symbol = value;
		this.wordRepresentation = Number(value);
		this.type = 'number';
};

NumberNode.prototype = {
	representWithWords : function(){
		return converter.toWords(this.wordRepresentation);
	},
	representWithSymbols : function () {
		return this.symbol;
	}

};

module.exports = NumberNode;