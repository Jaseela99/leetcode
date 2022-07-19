/* Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] */

var generate = function(numRows) {
    let pascal= Array(numRows).fill([]).map(() => [])
    for (let i = 0; i < numRows; i++){
      // create a new arr in pascal array, and add 1 as the first item
      pascal[i] = []
      pascal[i][0] = 1
      
      for (let j = 1; j < i; j++){
        // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
        // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
        pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
      }
      // finish the loop with adding 1 in the end for every child array
      pascal[i][i] = 1
    }
  return pascal
};