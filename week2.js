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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////day2

// Given the heads of two singly linked-lists headA and headB, 
// return the node at which the two lists intersect.
//  If the two linked lists have no intersection at all, return null.
/* Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 */

/* let headA = [4,1,4,8,4,5]
let headB = [5,6,1,8,4,5]

headA=  4-1-4--->
                8-4-5
headB=  5-6-1--->  */               

var getIntersectionNode = function(headA, headB) {
  //head is the first node of a linked list if its reference is to null then it returns null since there is no intersection
    if(headA===null||headB===null) return null
    //declaring variables
    let pointer1 = headA
    let pointer2 = headB
    //until the pointers are equal we cant find the intersection
    while (pointer1 !== pointer2){
      //pointer is passed to the next node of linked list
      pointer1=pointer1.next
      pointer2=pointer2.next
      //after looping through the end of the linked list it points to null then the node will be given to the headB
      if(pointer1===null){
        pointer1=headB
      }
      //similarily for pointer2
      if(pointer2 ===null){
        pointer2=headA
      }
      //when 1==2 then any of that is returned
      //if there is no intersection at the end both the head points to null hence it returns null
      if(pointer1===pointer2)
      return pointer1
    }
    return pointer1
};
console.log(getIntersectionNode(headA,headB))

