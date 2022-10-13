// Write here the code challenge solution
function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  
  var Tree = function (preo, ino) {
    if (ino.length === 0) return null;
    if (preo.length === 0) return null;
    const root=preo[0];
    let tree =new Node(root);
    let i = ino.indexOf(root);
    tree.left = Tree(preo.slice(1,i+1),ino.slice(0,i));
    tree.right = Tree(preo.slice(i+1),ino.slice(i+1));
    return tree;
  };
  module.exports =Tree;