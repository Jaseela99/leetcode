/* A valid encoding of an array of words is any reference string s and array of indices indices such that:
words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#" */
let words = ["time", "me", "bell"]

var minimumLengthEncoding = function(words) {
    //to get unique characters
    let set = new Set(words)
    //for every word in array if set already has that word
     for (let word of words)
         if (set.has(word))
         //loops through the word and deletes the word
             for (let i = 1; i < word.length; i++) 
                 set.delete(word.slice(i))
                 //set + 2 hashes 
     return Array.from(set).join().length + 1  
 };
 console.log(minimumLengthEncoding(words))
 //////////////////////////////////////////////////////////////////////////////
 /////////day2

/* You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
While moving from building i to building i+1 (0-indexed),
If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally. */
let heights = [4,2,7,6,9,14,12]  
let  bricks = 5
let  ladders = 1
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1,
    pq = new MinPriorityQueue({priority: x => x})
for (let i = 0; i < len; i++) {
    let diff = heights[i+1] - heights[i]
    if (diff > 0) {
        if (ladders > 0) pq.enqueue(diff), ladders--
        else if (pq.front() && diff > pq.front().element)
            pq.enqueue(diff), bricks -= pq.dequeue().element
        else bricks -= diff
        if (bricks < 0) return i
    }
}
return len
};
/////////////////////////////////////////////////////////
////////day3

/* Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5 */
/* let nums = [3,2,1,5,6,4]
let k = 2

var findKthLargest = function(nums, k) {
    //sorting the array
    nums.sort((a,b)=>{return a-b})
    //finding kth largest element
    return nums[nums.length-k]
  };
  console.log(findKthLargest(nums,k)) */
  ///////////////////////////////////////////////
  /////////day4
  /* There are n different online courses numbered from 1 to n.
 You are given an array courses where courses[i] = [durationi, lastDayi] 
 indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.
You will start on the 1st day and you cannot take two or more courses simultaneously.
Return the maximum number of courses that you can take.
Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date. */
let courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] - b[1])
    let total = 0, pq = new MaxPriorityQueue({priority: x => x})
    for (let [dur, end] of courses)
        if (dur + total <= end)
            total += dur, pq.enqueue(dur)
        else if (pq.front() && pq.front().element > dur)
            total += dur - pq.dequeue().element, pq.enqueue(dur)
    return pq.size()  
};
////////////////////////////////////////////////////////////////////

/////////day5
var isPossible = function(target) {
    let pq = new MaxPriorityQueue({priority: x => x}), sum = 0
    for (let num of target) sum += num, pq.enqueue(num)
    while (pq.front().element !== 1) {
        let num = pq.dequeue().element
        sum -= num
        if (num <= sum || sum < 1) return false
        num %= sum, sum += num, pq.enqueue(num || sum)
    }
    return true  
};
//////////////////////////////////////
/////////day6
/* Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array. */
let nums =[4,2,3]
var checkPossibility = function(nums) {
    for (let i = 1, err = 0; i < nums.length; i++)
          if (nums[i] < nums[i-1])
              if (err++ || (i > 1 && i < nums.length - 1 && nums[i-2] > nums[i] && nums[i+1] < nums[i-1]))
                  return false 
      return true   
  };