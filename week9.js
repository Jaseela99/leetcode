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


///////////////////////////////////////////////////////////
/* You are given two string arrays words1 and words2.
A string b is a subset of string a if every letter in b occurs in a including multiplicity.
For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.
Return an array of all the universal strings in words1. You may return the answer in any order.
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"] */
var wordSubsets = function(A, B) {
    let Bfreq = new Int8Array(26), cmax = 0,
       check = new Int8Array(26), ans = []
   for (let i = 0; i < B.length; i++, check.fill()) {
       let word = B[i]
       for (let j = 0; j < word.length; j++)
           check[word.charCodeAt(j) - 97]++
       for (let j = 0; j < 26; j++) {
           let diff = check[j] - Bfreq[j]
           if (diff > 0) cmax += diff, Bfreq[j] += diff
           if (cmax > 10) return []
       }
   }
   for (let i = 0; i < A.length; i++, check.fill()) {
       let word = A[i], j
       if (word.length < cmax) continue
       for (j = 0; j < word.length; j++)
           check[word.charCodeAt(j) - 97]++
       for (j = 0; j < 26; j++)
           if (check[j] < Bfreq[j]) break
       if (j === 26) ans.push(word)
   }
   return ans
};