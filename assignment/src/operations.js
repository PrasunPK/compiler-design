var add = function (firstValue, secondValue) {
    return firstValue.evaluate() + secondValue.evaluate();
};

var subtract = function (firstValue, secondValue) {
    return firstValue.evaluate() - secondValue.evaluate();
};

var multiply = function (firstValue, secondValue) {
    return firstValue.evaluate() * secondValue.evaluate();
};

var division = function (firstValue, secondValue) {
    return firstValue.evaluate() / secondValue.evaluate();
};

var power = function (firstValue, secondValue) {
    return Math.pow(firstValue.evaluate(), secondValue.evaluate());
};

var operations = {'+': add, '-': subtract, '*': multiply, '/': division, '^': power};

module.exports = operations;


