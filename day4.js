/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. */

let nums = [1, 2, 3, 4];
var runningSum = function (nums) {
  //initialized a variable sum
  let sum = 0;
  //an empty arrayto have the total sums
  let runSum = [];
  //looping over
  for (let i = 0; i < nums.length; i++) {
    //for every i sum is increased and is pushed to runSum
    sum = sum + nums[i];
    runSum.push(sum);
  }
  return runSum;
};
runningSum(nums);


//********************************************************************************* */
