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