/////////////////////////////////////////////////////day1

/* The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return the number of distinct solutions to the n-queens puzzle.
Input: n = 4
Output: 2*/


/* var totalNQueens = function(n) {
    if (n === 1 || n >= 4) return dfs([], n, 0);
 return 0;
};

var dfs = function (points, n, index) {
 var res = 0;
 if (points.length === n) return 1;
 for (var i = index; i < n; i++) {
   if (points.length !== i) return res;
   for (var j = 0; j < n; j++) {
     if (!isValid(points, [i, j])) continue;
     points.push([i, j]);
     res += dfs(points, n, i + 1);
     points.pop();
   }
 }
 return res;
   
};
var isValid = function (oldPoints, newPoint) {
 var len = oldPoints.length;
 for (var i = 0; i < len; i++) {
   if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
   if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
 }
 return true;
}; */

//*************************************************************************************************************************************** */


