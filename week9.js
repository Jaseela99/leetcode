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

//////////////////////////////////////

/* Given an integer array nums, handle multiple queries of the following types:

Update the value of an element in nums.
Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
void update(int index, int val) Updates the value of nums[index] to be val.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8 */

var NumArray = function (nums) {
    this.n = nums.length;
    this.segTree = new Array(this.n * 2);
    this.build(nums);
};

NumArray.prototype.build = function (nums) {

    let length = this.n;
    let j = 0;

    for (var i = length; i < length * 2; i++) {
        this.segTree[i] = nums[j];
        j++;
    }

    for (i = length - 1; i > 0; i--) {
        this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
    }

}

NumArray.prototype.update = function (index, val) {

    let length = this.n;
    index += length;
    this.segTree[index] = val;

    while (index > 1) {

        let left = index, right = index;

        if (index % 2 === 0) {
            right = index + 1;
        } else {
            left = index - 1;
        }

        index = Math.floor(index / 2);
        this.segTree[index] = this.segTree[left] + this.segTree[right];
    }

};

NumArray.prototype.sumRange = function (left, right) {

    let length = this.n;
    left += length, right += length;
    let sum = 0;

    while (left <= right) {

        if (left % 2 === 1) {
            sum += this.segTree[left];
            left++;
        }

        if (right % 2 === 0) {
            sum += this.segTree[right];
            right--;
        }

        left = Math.floor(left / 2);
        right = Math.floor(right / 2);

    }

    return sum;

};

///////////////////////////////////////////////////
/* There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109. */

var uniquePaths = function(m, n) {
    const dp = new Array(n + 1).fill(1);
    
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[col] = dp[col] + dp[col + 1];
        }
    }
    return dp[1];
};

/////////////////
/* Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.
You must find a solution with a memory complexity better than O(n2).
Example 1:
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13 */

var kthSmallest = function(matrix, k) {
    const n = matrix.length
    
    function getCount(target) {
        let count = 0;
        
        for(let i = 0; i < n; i++) {
            let currCount = 0;
            
            for(let j = 0; j < n; j++) {
                if(matrix[i][j] <= target) currCount++;
                else break;
            }
            count += currCount;
            if(!currCount) break;
        }
        return count;
    }
    
    let start = matrix[0][0], end = matrix[n-1][n-1];
    
    while(start < end) {
        const mid = Math.floor((end-start)/2) + start;
        const count = getCount(mid);
        if(count < k) start = mid+1;
        else end = mid;
    }
    return end;
};

