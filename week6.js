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