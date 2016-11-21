var modules = {};
module.exports = modules;

modules.parse = function(tree){
	if(tree.leftChild instanceof Object)
		tree.leftChild = this.parse(tree.leftChild);
	if(tree.rightChild instanceof Object)
		tree.rightChild = this.parse(tree.rightChild);
	
	return ["(",tree.leftChild,tree.parent,tree.rightChild,")"].join("");
};