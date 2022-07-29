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

  /////////////////////////

 /*  Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter. */

var findAndReplacePattern = function(words, pattern) {
    let ans = [], codex = new Map()
  const translate = char => {
      if (!codex.has(char))
          codex.set(char, String.fromCharCode(97 + codex.size))
      return codex.get(char)
  }
  const compare = word => {
      codex.clear()
      for (let i = 0; i < word.length; i++)
          if (translate(word[i]) !== cipher[i])
              return
      ans.push(word)
  }
  let cipher = new Array(pattern.length)
  for (let i = 0; i < pattern.length; i++)
      cipher[i] = translate(pattern.charAt(i))
  words.forEach(compare)
  return ans
};