var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
	var result = false;

  var searchTree = function(node) {
    if (node.value === target) {
      result = true;
    };
    if (node.children !== undefined) {
      for (var i = 0; i < node.children.length; i++) {
        result = searchTree(node.children[i]);
      }
    }
    return result;
  };

  searchTree(this);
	return result;
};

