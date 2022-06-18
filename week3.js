/* You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
Return the maximum score you can get by erasing exactly one subarray.
An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6]. */

/* let nums = [4,2,4,5,6]
var maximumUniqueSubarray = function(nums) {
    let set = new Set() //defined a set
    let left = 0 //left and right pointers
    let right = 0
    let score = 0 
    let sum=0
        while(right < nums.length){
            //if set do not have nums[right]
          if(!set.has(nums[right])){
            //then it is added to the set
              set.add(nums[right])
              //sum is increased
              sum += nums[right]
              //score will be maximum of sum and score
              score = Math.max(score,sum)
              right++//right pointer move towards right
          }else{
            //deleted the nums[left ] which is already in set
              set.delete(nums[left])
              //from sum it is subtracted
              sum -= nums[left]
              score = Math.max(score,sum)
              left++//left pointer moves to next element
          }
        }
        return score

 
 };
 console.log(maximumUniqueSubarray(nums)) */

 //////////////////////////////////////////////////////////////////////////////////////////////////////
 /////////////////day2

/*  Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below.
 More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above). */

/* let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

var minimumTotal = function(triangle) {
    //reverses the triangle array=> dynamic programming we have choose the minimum from the two adjacent indexes =>behaves similar to binary tree
   let newtri = triangle.reverse().reduce((prev, curr) => {  //after reversing [4,1,8,3] willbe the first index
    const level = []                                
    //console.log(prev,curr)    //[4,1,8,3] , [6,5,7]                         
    for(let j = 0; j < curr.length; j++) {                   
        level[j] = Math.min(prev[j], prev[j + 1]) + curr[j]; //adjacent indexes of previous are compared and min is taken =>summed with curr[j ad]
        //console.log(level[j])
    }
    return level;//whole array is returned
})
return newtri[newtri.length-1] //returns last element of arr or use pop method
 }
 console.log(minimumTotal(triangle)) */

/////////////////////////////////////////////////////////////////

//////////day3

/* Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
In one step, you can delete exactly one character in either string. 
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".*/

let word1 ="sea"
let word2 ="eat"

var minDistance = function(word1, word2) {
  if (word1.length < word2.length) return minDistance(word2, word1);
  
  if (word2.length == 0) return word1.length;
  
  let m = word1.length, n = word2.length;
  
  let dp = new Array(n + 1);
  
  for (let i = 0; i <= m; i++) {  
      let prev = 0;
      for (let j = 0; j <= n; j++) {   
          let temp = dp[j];
          if (i == 0 || j == 0) {
              dp[j] = i + j;
          } else if (word1.charAt(i-1) === word2.charAt(j-1)) {
              
              dp[j] = prev;
          } else {
              
              dp[j] = 1 + Math.min(dp[j], dp[j-1]);
          }
          
          prev = temp;
      }
  }
  
  return dp[n];
  


/////****************************************************** */

/* if (word1.length < word2.length) return minDistance(word2, word1);
    
const dp = Array(word1.length + 1);
   for (let i = 0; i < word1.length + 1; i++) {
       dp[i] = i;
   }
   for (let j = 1; j < word2.length + 1; j++) {
       let last = dp[0];
       dp[0] = j;
       for (let i = 1; i < word1.length + 1; i++) {
           const current = dp[i];
           dp[i] = word1[i-1] === word2[j-1] ? last : (Math.min(dp[i], dp[i-1]) + 1);
           last = current;
       }
   }
   return dp[word1.length]; */
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  /////////day4
  /* you are given an array of words where each word consists of lowercase English letters.
wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.
For example, "abc" is a predecessor of "abac"===================>  abc are in same order in abac and onlly one a is added to it
while "cba" is not a predecessor of "bcad".
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.
Return the length of the longest possible word chain with words chosen from the given list of words.
Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"]. */

let words = ["b","a","ba","bca","bda","bdca"]
var longestStrChain = function(words) { 
    let dp = {};
    let max=0
    //sorting the array on the basis of length
    words = words.sort((a,b)=>a.length - b.length);
    //console.log(words)
    //for every word
    for (let word of words) {
        let longest = 0;
        //looping through the word
        for (let i=0;i<word.length;i++) {
            //predecesor  
            let pre = word.slice(0,i) + word.slice(i+1);
            //indexof predecessor in word
            longest = Math.max(longest, (dp[pre]||0) + 1);
        }
        dp[word] = longest;
        max=Math.max(max,longest) //max value is obtained
    }
    return max;
   
};
console.log(longestStrChain(words))

///////////////////////////////////////////////////////////

///////day4

/* Given a string s, return the longest palindromic substring in s.
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer. */

let s ="babad"

var longestPaliandrome= function (s){
    let max =""
    //loops through the s
    for (var i = 0; i < s.length; i++) {
        //to loop through two adjacent indices i and i + 1
        for (var j = 0; j < 2; j++) {
        //2 pointers
          var left = i; //0
          var right = i + j;//5
          //both are equal then inner indices are checked
          while (s[left] && s[left] === s[right]) {
            left--;
            right++;
          }
          //taking the palindromic only
          if ((right - left - 1) > max.length) {
            //substring is stored  in max
            max = s.substring(left + 1, right);
          }
            
        }
      }
      return max;  
}
console.log(longestPaliandrome(s))


//////////////////////////////////////////////////////////
////////////day5
/* You are given the root of a binary tree. 
We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.
Return the minimum number of cameras needed to monitor all nodes of the tree. 
Input: root = [0,0,null,0,0]
Output: 1
Explanation: One camera is enough to monitor all nodes if placed as shown.*/

let root = [0,0,null,0,0]

var minCameraCover = function(root) {
    let ans = 0
     const dfs = node => {
        //if nonode return 0
         if (!node) return 0
         //left+right = val
         let val = dfs(node.left) + dfs(node.right)
         if (val === 0) return 3
         //if node left+right <3 ans is incremented
         if (val < 3) return 0
         ans++
         return 1
     }
     //if last return <2 ans is returned
     return dfs(root) > 2 ? ans + 1 : ans  
 };
console.log(minCameraCover(root))
//////////////////////////////////////////////////////////////////////////
//////day6

/* Design a special dictionary with some words that searchs the words in it by a prefix and a suffix.
Implement the WordFilter class:
WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary, which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.
Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
// return 0, because the word at index 0 has prefix = "a" and suffix = 'e".
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e");  */

let wors=["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
var WordFilter = function(words) {
    this.map = new Map();
  for (let i = 0; i < words.length; i++) {
    let prefix = '';
    for (let j = 0; j <= words[i].length; j++) {
      let suffix = '';
      for (let k = 0; k <= words[i].length; k++) {
        suffix = words[i].slice(k);
        this.map.set(prefix + '#' + suffix, i);
      }
      prefix += words[i][j];
    }
  }
};


WordFilter.prototype.f = function(prefix, suffix) {
  let target = prefix + '#' + suffix;
  return this.map.has(target) ? this.map.get(target) : -1;  
};

console.log(WordFilter(words))