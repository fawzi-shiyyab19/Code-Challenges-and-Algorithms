// Write here the code challenge solution
function Node(value,left=null,right=null){
    this.value=value;
    this.left=left;
    this.right=right;
}
function checks(lTree,rTree){
    if(!lTree && !rTree){ return true;}
    if(!lTree || !rTree){ return false}
    if(lTree.value !== rTree.value){
        return false;
    }
    return( 
        checks(lTree.left,rTree.left) && checks(lTree.right,rTree.right)
    );
};
module.exports ={Node,checks}