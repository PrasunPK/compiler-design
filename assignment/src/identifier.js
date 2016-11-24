var Identifier = function (identity,operator,expression) {
    this.identity = identity;
    this.operator = operator;
    this.expression = expression;
};

Identifier.prototype = {
    evaluate:function () {
        return this.expression.evaluate();
    }
};

module.exports = Identifier;
