var Parser = require('jison').Parser;
var fs = require('fs');
var NumberNode = require('./numberNode.js');
var OperatorNode = require('./operatorNode.js');

var modules = {};

var grammar = fs.readFileSync('./grammar.jison','utf-8');
var parser = new Parser(grammar);
parser.generate();

modules.represent = function(tree){
	if(tree.leftChild instanceof Object)
		tree.leftChild = this.represent(tree.leftChild);
	if(tree.rightChild instanceof Object)
		tree.rightChild = this.represent(tree.rightChild);
	
	return ["(",tree.leftChild,tree.parent,tree.rightChild,")"].join("");
};

modules.createNodes = function(tree){
	var newTree = {};
	return generateNewTree(tree,newTree);
};

var generateNewTree = function(tree,newTree){

	newTree.parent = new OperatorNode(tree.parent);
	if(tree.leftChild instanceof Object)
		newTree.leftChild = generateNewTree(tree.leftChild,{});
	else{
		newTree.leftChild = new NumberNode(tree.leftChild);
	}

	if(tree.rightChild instanceof Object)
		newTree.rightChild = generateNewTree(tree.rightChild,{});
	else{
		newTree.rightChild = new NumberNode(tree.rightChild);
	}

	return newTree;
}


module.exports = modules;
