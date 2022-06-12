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

//let s = "(]";
//var isValid = function (s) {
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
  /* const stack = [];
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

console.log(isValid(s)); */

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

/* var getIntersectionNode = function(headA, headB) {
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
 */
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////day3

/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n 
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.*/
let nums1 = [1,2,3,0,0,0]
let  m = 3 
let nums2 = [2,5,6]
let n = 3
var merge = function(nums1, m, nums2, n) {
  //we need to start from last index
  let first = m-1;
  let second = n-1;
  //looping from last index to first
  for (i = m+n-1;i >= 0;i--){
    //if the loop is over and then break is given
      if(second < 0){
          break
        }
        //nums1 has some empty elements and it is replaced by first array elements if element in array 1 > array2
      if(nums1[first]>nums2[second]){
        nums1[i]=nums1[first]
        first--;
      }else{
        //else second array element is given to empty elements
          nums1[i] = nums2[second]
          second--;
      }
  }
  return nums1
};
console.log(merge(nums1,m,nums2,n))

///////////////////////////////////////////////////////////////////////

///day4

/* You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.
Return the minimum number of steps to make the given string empty.
A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does not necessarily need to be contiguous.
A string is called palindrome if is one that reads the same backward as well as forward.
Input: s = "ababa"
Output: 1
Explanation: s is already a palindrome, so its entirety can be removed in a single step. */


/*  let s = "ababa"
var removePalindromeSub = function(s) {
  //s is empty return 0
  if (s.length===0)
      return 0
      //reversed string
      //split - to array  reverse-reverse the array join- joins the array elements in to string
 let  reversed = s.split("").reverse().join("")
 //if they are equal it is removed in one step otherwise its 2
 if(s===reversed){
     return 1
     
 }else{
     return 2
 }
};

console.log(removePalindromeSub(s))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////day5

/* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */
/*
let numbers = [2,7,11,15]
let target=9
var twoSum = function (numbers,target){
  //first and last index
  let p1 = 0
  let p2 =numbers.length-1
//while start<=end
  while(p1<=p2){
    //if the sum =target then indexes are returned in an array
    if(numbers[p1]+ numbers[p2]===target){
      return [p1+1,p2+1]
    }
    //if sum>target then index is given in reverse otherwise p1 increased by 1
    numbers[p1] + numbers[p2] > target ?
    p2-- : p1++
  }
  //if p1>p2  return empty array
  return []

}
console.log(twoSum(numbers,target))

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////day6

/* Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. */

let s = "abcabcbb"

var  lengthOfLongestSubstring = function(s){
  //to store the unique values
  let set = new Set()
  //two pointers
  let left=0;
  let right=0
  //max length of the unique substring
  let maxSubStrLength =0

  while(right<s.length){
    //if the set donot have right th character of string,then it is added to set 
    if (!set.has(s.charAt(right))){
      set.add(s.charAt(right))
      //previous sub length and setsize is compared and max is given to maxlength of substring
      maxSubStrLength = Math.max(maxSubStrLength,set.size)
      //right pointer is moved by 1
      right++
    }else{
      //if set has the charAt,left most charat from s is removed from the set and left pointer is moved by 1
      set.delete(s.charAt(left))
      left++ 
    }

  }
  //if right=> s.length then length is returned
  return maxSubStrLength
}

console.log(lengthOfLongestSubstring(s))

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////day7

/* You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. 
Note that this modifies the array for future operations.
Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero. */

let nums = [1,1,4,2,3]
let x=5

var minOperations = function(nums, x) {
  let target = -x, res = -1, sum = 0, left = 0;
  nums.forEach(element => {
      target += element; //6
  });
  if(target === 0) return nums.length; //if (sum of elements)- x =0 ;then nums.length is the number of steps to reduce the x to 0
  if(target < 0) return -1; //if -ve then it cannot be reduced hence return -1
  //if target is positive
  nums.forEach(function(element, index){
      sum += element;        //each  of elemnt is added to sum
      
      while(sum > target){  //nums[left++] is removed from sum
          sum -= nums[left++];
      }
      if(sum === target){ //res will be maximum of res and length- left
          res = Math.max(res, index - left + 1);
      }
  })
  if(res === -1) return -1; 
  else return nums.length - res; //if res!=-1 then it willbe length-res

}

console.log(minOperations(nums,x))
