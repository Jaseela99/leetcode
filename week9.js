/* Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree. */

var flatten = function(root) {
    let head = null
     const revPreOrder = node => {
         if (node.right) revPreOrder(node.right)
         if (node.left) revPreOrder(node.left)
         node.left = null, node.right = head, head = node
     }
     if (root) revPreOrder(root) 
 };