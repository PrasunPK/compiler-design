var converter = require('number-to-words');

var NumberNode = function (value) {
    this.symbol = value;
    this.value = Number(value);
    this.type = 'number';
};

NumberNode.prototype = {
    representWithWords: function () {
        return converter.toWords(this.value);
    },
    representWithSymbols: function () {
        return this.symbol;
    },
    evaluate: function () {
        return this.value;
    }

};

module.exports = NumberNode;