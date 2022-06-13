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

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

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
 console.log(minimumTotal(triangle))
