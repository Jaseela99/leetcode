/* There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous.

You can feed the pigs according to these steps:

Choose some live pigs to feed.
For each pig, choose which buckets to feed it. The pig will consume all the chosen buckets simultaneously and will take no time.
Wait for minutesToDie minutes. You may not feed any other pigs during this time.
After minutesToDie minutes have passed, any pigs that have been fed the poisonous bucket will die, and all others will survive.
Repeat this process until you run out of time.
Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time.

 

Example 1:

Input: buckets = 1000, minutesToDie = 15, minutesToTest = 60
Output: 5 */

var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let answer = 1;
 let n = minutesToTest / minutesToDie >> 0;
 n += 1;
 
 // calculation with loop
 // while(n ** answer <= buckets) {
 //   answer++;
 // }
 
 return Math.ceil(Math.log(buckets) / Math.log(n));
};

/////////////////////////////////////////////////////////
/* Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u". */

var countVowelPermutation = function(n) {
    const modVal = (1e9 + 7);
  let a = 1;
  let e = 1;
  let i = 1;
  let o = 1;
  let u = 1;

  for (let x = 1; x < n; x++) {
     let tempA = e % modVal;
     let tempE = (a + i) % modVal;
     let tempI = (a + e + o + u) % modVal;
     let tempO = (i + u) % modVal;
     let tempU = a % modVal;
     a = tempA;
     e = tempE;
     i = tempI;
     o = tempO;
     u = tempU;
  }

  return (a + e + i + o + u) % modVal;
};