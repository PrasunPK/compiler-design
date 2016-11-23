var converter = require('number-to-words');

var OperatorNode = function (value, leftChild, rightChild) {
    this.symbol = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.wordRepresentation = getWordRepresentation(value);
};

var getWordRepresentation = function (operator) {
    var symbols = {'+': 'plus', '-': 'minus', '*': 'times', '/': 'divide'};
    return symbols[operator];
};

OperatorNode.prototype = {

    representWithWords: function () {
        return ["(",
            this.leftChild.representWithWords(),
            this.wordRepresentation,
            this.rightChild.representWithWords(),
            ")"].join(" ");
    },
    representWithSymbols: function () {
        return ["(",
            this.leftChild.representWithSymbols(),
            this.symbol,
            this.rightChild.representWithSymbols(),
            ")"].join(" ");
    }
};

module.exports = OperatorNode;