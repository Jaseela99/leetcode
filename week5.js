/* A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32 */


const minPartitions = n => Math.max(...n.split(''))
//////////////////////////////////////////////////////////
/////////day2
/* A string s is called good if there are no two different characters in s that have the same frequency.
Given a string s, return the minimum number of characters you need to delete to make s good.
The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
Input: s = "aab"
Output: 0
Explanation: s is already good. */
var minDeletions = function(s) {
    let arr = Array(26).fill(0)
      let res = 0
      
      for(let i=0;i<s.length; i++){
          let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
          arr[index]++
      }
      
      arr.sort((a,b)=>b-a)
      
      for(let i=1; i<26; i++){
          while(arr[i] && arr[i] >= arr[i-1]){
              arr[i]--
              res++
          }
      }
      
      return res   
  };


  /////////////////////////////////////////////////////////////
  /////////////day3
/*   You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

 

Example 1:

Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
Explanation:
Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue. */
let people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
var reconstructQueue = function(people) {
    let res = []
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
    people.forEach(val => {
        res.splice(val[1], 0, val)
    })
    return res 
};
///////////////////////////////////
/////////day5
/* Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment or decrement an element of the array by 1.
Test cases are designed so that the answer will fit in a 32-bit integer.
Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2] */

    var minMoves2 = function(nums) {
        nums.sort((a,b) => a - b)
         let ans = 0, median = nums[~~(nums.length / 2)]
         for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i])
         return ans  
     };
//////////////////////////////////////////////
/////////////day 6
/* You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8. */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
       let totalUnits = 0
       for (let i = 0;truckSize && i < boxTypes.length; i++) {
           let count = Math.min(boxTypes[i][0], truckSize)
           totalUnits += count * boxTypes[i][1]
           truckSize-=count
       }
       return totalUnits 
   };
   /////////////////////////////////////////
   /////day 6
   /* You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:
horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7. */

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b) => a - b)
     verticalCuts.sort((a,b) => a - b)
     let maxh = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length-1]),
         maxv = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length-1])
     for (let i = 1; i < horizontalCuts.length; i++)
         maxh = Math.max(maxh, horizontalCuts[i] - horizontalCuts[i-1])
     for (let i = 1; i < verticalCuts.length; i++)
         maxv = Math.max(maxv, verticalCuts[i] - verticalCuts[i-1])
     return BigInt(maxh) * BigInt(maxv) % 1000000007n 
 };
 /////////////////////////////////////////////
 //day7
/*  A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.
For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.
Given an integer array nums, return the length of the longest wiggle subsequence of nums.
Input: nums = [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3). */

var wiggleMaxLength = function(nums) {
    let len = nums.length, i = 1
     while (nums[i] === nums[i-1]) i++
     let up = nums[i-1] > nums[i], ans = 1
     for (; i < len; i++)
         if ((up && nums[i] < nums[i-1]) || (!up && nums[i] > nums[i-1]))
             up = !up, ans++
     return ans 
 };