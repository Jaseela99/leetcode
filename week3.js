/* You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
Return the maximum score you can get by erasing exactly one subarray.
An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6]. */
let nums = [4,2,4,5,6]
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
 console.log(maximumUniqueSubarray(nums))