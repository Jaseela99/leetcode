/* Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] */

var generate = function(numRows) {
    let pascal= Array(numRows).fill([]).map(() => [])
    for (let i = 0; i < numRows; i++){
      // create a new arr in pascal array, and add 1 as the first item
      pascal[i] = []
      pascal[i][0] = 1
      
      for (let j = 1; j < i; j++){
        // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
        // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
        pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
      }
      // finish the loop with adding 1 in the end for every child array
      pascal[i][i] = 1
    }
  return pascal
};

///////////////////////////////////////
/* Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 

Example 1:

Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace". */
var numMatchingSubseq = function(s, words) {
  let count = 0
    for(let w of words){
      if(findSubsequence(s, w)) count++
    }
    return count
  };
    
  function findSubsequence(s, w){
    let idx = -1
    for(const c of w){
      const found = s.indexOf(c, idx+1)
      if(found == -1) return false
      idx = found
    }
    return true    
  };

  /////////////////////////////////////////////
/*   Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5] */
var reverseBetween = function(head, m, n) {
  let start = head, cur = head;
let i = 1;
while (i < m) {
   start = cur;
   cur = cur.next;
   i++;
}
let prev = null, tail = cur;
while (i <= n) {
   let next = cur.next;
   cur.next = prev;
   prev = cur;
   cur = next;
   i++;
}
start.next = prev;
tail.next = cur;
return m == 1 ? prev : head; 
};
//////////////////////////////////////////////////////////
/* Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.
Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5] */
var partition = function(head, x) {
  let fdum = new ListNode(0), bdum = new ListNode(0),
        front = fdum, back = bdum, curr = head
    while (curr) {
        if (curr.val < x)front.next = curr, front = curr
        else back.next = curr, back = curr
        curr = curr.next
    }
    front.next = bdum.next, back.next = null
    return fdum.next   
};
//////////////////////////////////////////////////////////
/* You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 */
class BinaryIndexedTree {
  constructor(size) {
      this.bit = new Array(size);
  }
  sum(index) {
      let count = 0;
      while (index > 0) {
          count += this.bit[index] || 0;
          index = index - (index & -index); // this is to get parent node in binary indexed tree
      } 
      return count;
  }
  update(index, delta) {
      while (index < this.bit.length) {
          this.bit[index] = (this.bit[index] || 0) + delta;
          index = index + (index & -index); // this is to get next node in binary indexed tree
      }
  }
}



var countSmaller = function(nums) {
  let counts = new Array(nums.length);
  let delta = 1e4+1; // Math.pow(10,4) +1 this is to handle negative numbers to make them positive as binary indexed tree takes indexes which is >= 0
  let bitArray = new BinaryIndexedTree(2e4+2);
  for (let i = nums.length - 1; i >= 0; i--) {
      counts[i] = bitArray.sum(nums[i] + delta - 1);
      bitArray.update(nums[i]+delta, 1);
  }
  return counts;
};