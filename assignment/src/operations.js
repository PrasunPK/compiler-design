var add = function (firstValue, secondValue) {
    return firstValue.evaluate() + secondValue.evaluate();
};

var sub = function (firstValue, secondValue) {
    return firstValue.evaluate() - secondValue.evaluate();
};

var multiply = function (firstValue, secondValue) {
    return firstValue.evaluate() * secondValue.evaluate();
};

var division = function (firstValue, secondValue) {
    return firstValue.evaluate() / secondValue.evaluate();
};

var operations = {'+':add,'-':sub,'*':multiply,'/':division};

module.exports = operations;


