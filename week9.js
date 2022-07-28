/* Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree. */

/* var flatten = function(root) {
    let head = null
     const revPreOrder = node => {
         if (node.right) revPreOrder(node.right)
         if (node.left) revPreOrder(node.left)
         node.left = null, node.right = head, head = node
     }
     if (root) revPreOrder(root) 
 }; */
 
 /* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

var isAnagram = function(s, t) {
    let sortedS = s.split('').sort().join('')
      let sortedT = t.split('').sort().join('')
      if (sortedS === sortedT) {
          return true
      } else {
          return false
      }   
  };