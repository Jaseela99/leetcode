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
 console.log(fib(4))
///////////////////////////////////////////////////////

/////primenumbers
/*function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

 function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}
display(160) */

var enterNumber = function(n){
for(let i=2; i<=n ;i++){
        let isPrime = true;
        for(let j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    }
}
enterNumber(101)


let arr=[1,2,3,4,5]

const odds= arr.filter(n=>n%2)
const evens = arr.filter(n=>n%2==0)
console.log(evens)
console.log(odds)

///////////////////////////////////////////////////
///////day4

/* Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true */

var isInterleave = function(s1, s2, s3) {
    let n = s1.length + 2, m = s2.length + 2
    if (n + m - 4 !== s3.length) return false
    let dp = new Uint8Array(m)
    dp[1] = 1
    for (let i = 1; i < n; i++)
        for (let j = 1; j < m; j++) {
            let up = dp[j] && s1[i-2] === s3[j+i-3],
                left = dp[j-1] && s2[j-2] === s3[j+i-3]
            dp[j] = up || left
        }
    return dp[m-1]   
};