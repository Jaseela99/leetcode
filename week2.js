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

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Input: s = "()"
Output: true */

let s = "(]";
var isValid = function (s) {
  /*  //bracketsets
  const bracketSets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  //to store brackets if itsnot in correct order
  const arr = [];
  //if the first character in string is closing tag it returns false
  if (s[0] === "}" || s[0] === "]" || s[0] === ")") return false;
  //looping over the string
  for (let i = 0; i < s.length; i++) {
      //if any of them contains opening brackets it is pushed inside array
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") arr.push(s[i]);
    else {
        //if the last elemnt in the array and the value of the s[i] in bracket sets are equal and they are popped out
      if (arr[arr.length - 1] === bracketSets[s[i]]) {
          console.log(bracketSets[s[i]])
        arr.pop();
      } else arr.push(s[i]);
    }
  }
  return !arr.length
   */

  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  //looping
  for (let i = 0; i < s.length; i++) {
    //if there is value for s[i] in map it is pushed in to stack
    if (map[s[i]]) {
      console.log(s[i], map[s[i]]);
      stack.push(map[s[i]]);
      //if s[i] is not poppedout then false is returned
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};

console.log(isValid(s));
