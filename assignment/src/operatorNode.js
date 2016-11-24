var operations = require('./operations.js');

var OperatorNode = function (value, leftChild, rightChild) {
    this.symbol = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.value = getWordRepresentation(value);
    this.operation = getOperation(value);
};

var getWordRepresentation = function (operator) {
    var symbols = {'+': 'plus', '-': 'minus', '*': 'times', '/': 'divide'};
    return symbols[operator];
};
var getOperation = function (operator) {
    return operations[operator];
};

OperatorNode.prototype = {

    representWithWords: function () {
        return ["(",
            this.leftChild.representWithWords(),
            this.value,
            this.rightChild.representWithWords(),
            ")"].join(" ");
    },
    representWithSymbols: function () {
        return ["(",
            this.leftChild.representWithSymbols(),
            this.symbol,
            this.rightChild.representWithSymbols(),
            ")"].join(" ");
    },
    evaluate: function () {
        return this.operation(this.leftChild, this.rightChild);
    }
};

module.exports = OperatorNode;