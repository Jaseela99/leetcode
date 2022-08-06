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