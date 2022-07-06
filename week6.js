/* There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively. */

var candy = function(ratings) {
    var len = ratings.length;
       var forward = new Array(len);
       backward = new Array(len);
   
       forward[0] = 1;
       backward[len-1] = 1;
       for (var i = 1; i < len; i++) {
           if (ratings[i] > ratings[i-1]) forward[i] = forward[i-1] + 1;
           else forward[i] = 1;
       }
   
       for (var i = len - 2; i >= 0; i--) {
           if (ratings[i] > ratings[i+1]) backward[i] = backward[i+1] + 1;
           else backward[i] = 1;
       }
       var sum = 0;
       for (var i = 0; i < len; i++) {
           sum += Math.max(forward[i], backward[i]);
       }
       return sum;
   };
   ////////////////////////////////////
   ////day2
/*    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */
var longestConsecutive = function(nums) {
    let nmap = new Map(), ans = 0,
           seen = new Uint32Array(nums.length)
       for (let i = 0; i < nums.length; i++)
           if (!nmap.has(nums[i])) nmap.set(nums[i], i)
       for (let n of nums) {
           let curr = n, count = 1
           if (seen[nmap.get(curr)]) continue
           while (nmap.has(curr+1)) {
               let ix = nmap.get(++curr)
               if (seen[ix]) {
                   count += seen[ix]
                   break
               } else seen[ix] = 1, count++
           }
           seen[nmap.get(n)] = count
           ans = Math.max(ans, count)
       }
       return ans   
   };
   //////////////////////////////////
   //day3

   /* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1. */

   var fib = function(n) {
    if(n<2){
        return n
     }else{
         
     return fib(n-1)+fib(n-2) 
     }
 };