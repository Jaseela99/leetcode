/////////////////////////////day1

//calender 

/* Given an integer num, return the number of steps to reduce it to zero.
In one step, if the current number is even, you have to divide it by 2,
otherwise, you have to subtract 1 from it. */

/* var numberOfSteps = function(num) {
    //using whileloop
    
    //num of times the function is called
    let steps = 0;
    //it runs until the condition become false and return steps
    while (num !== 0) {
        //if num is even then num is set to num/2 and else it is num -1
        num % 2 === 0? num = num / 2 :num = num - 1;
        steps++;
    }
    return steps;  
};
console.log(numberOfSteps(14)); */


//----------------------------------------------------

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */


/* let nums = [2,7,11,15]
let target = 9

var twoSum = function(nums,target){ */
//using for loop

//looping for different indices time complexity becomes n2
    /* for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if both adds up to target then i and j is returned
            if(nums[i]+nums[j]===target){
            return [i,j]
            }
        }
    } */

    //********************** */


    /*  let arr =[]
    for (let i=0;i<nums.length;i++){
        //if arr has any of the num values index of that value and index of nums value is returned in an array
        if(arr.includes(nums[i])){
         return  [arr.indexOf(nums[i]),i] 
        }else {
            //else the target - value of nums is pushed to array
         arr.push(target-nums[i])
        }
    } 

}

console.log(twoSum(nums,target))
 */

//----------------------------------------------------

/* Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 */


//let x=12321
//var isPalindrome = function(x) {
  /*  let y=  x.toString().split('').reverse().join('')* Math.sign(x)
  y === x ? console.log("true") : console.log("false") */
  
  
  /* let y = x.toString()
  for (let i=0;i < y.length/2;i++ ){
        let temp =y.charAt(i)
        y.charAt(i)=y.charAt(length-i-1)
        y.charAt(length-i-1) = temp
    }
    parseInt(y)===x? true :false */
//};
//isPalindrome(x)

//----------------------------------------------------


//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/* let num = [3,0,1]

 var missingNumber = function(num) {
    let missing;
    for(let i=0;i<=num.length;i++){
        //if indexof num[i] is -1 then then that index does nt exist in array so does the value 
        if(num.indexOf(i)===-1){
            //missing value is returned
         return missing =i 
        }
        
    }
};
console.log(missingNumber(num)) */


/////////////////////////////////////////////////////////////////////

/////////////////////////////day2



 //calender question

/*  Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor. */

/* let dividend =2147483648
let divisor =-1

var divide = function(dividend, divisor) {

  let  quotient = 0
  //cases of range
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (divisor === 1 && dividend === 2147483648) return 2147483648;
  //to get absolute value
  divid = Math.abs(dividend)
  divis =Math.abs(divisor)
  //if divident =0 or dividend small then it returs zero
  if (dividend === 0 || divid < divis) return 0;
  //if divsor=1 then dividend is positive otherwise negative
  if (divis === 1) return divisor > 0 ? dividend : -dividend;
  //while loop runs until divid become less than zero
    while(divid >= divis){
        //for every time the divisor will be reduced from divident qoutiet increases
        divid -= divis
        quotient++
    }
    //if both of them are positive or negative then quotient will be returned 
    if((dividend<0 && divisor<0 )|| (dividend>0 && divisor>0)){
        return quotient 
    }else{
        //otherwise -quotient
        return quotient = -quotient
    }
    
    
};

console.log(divide(dividend,divisor))  */



/////////////////////////////////////////////////////////////////////////////////////

//discussed question

/*  let nums=[0,1,2,2,4,3,2,0,5]
let val=2
const removeVal =(nums,val)=>{
    //no of elements existing
    let existingCount =0
    for( var i = 0; i < nums.length; i++){ 
        if ( nums[i] === val) { 
            //indexOf val is found and is replaced with "_",if any elemnt in num equals val
            let index = nums.indexOf(val)
              nums[index]="_"    
        }
        if(nums[i] !== "_"){   //existing Count increases if num[i] is int
            existingCount ++
        } 
    }
    return {nums,count:existingCount}
}
console.log(removeVal(nums,val)) */


//////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////day3


/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.*/

/* let s = "III";

var romanToInt = function (s) {
  var romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
   let num =0
  for (i=0; i < s.length; i++){
    const curr = romanToNum[s[i]];//takes the first value of s[i] from the object =>1
    const next = romanToNum[s[i+1]];//takes the next 5
    if (curr < next){
        num += next - curr //  5 - 1 = 4
        i++ //skips the next i and return value
        console.log(num)
    } else {
        num += curr //5
    }
}

return num; 
};
console.log(romanToInt(s));
 */
//****************************************************************

//Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.
/* 
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
 */

/* let s = "00110"
let k = 2
var hasAllCodes = function(s, k) {
    //if k is grater than string then false is returned
    if(s.length<k){
        return false
    }
    //set is defined to store unique values
    let subStr = new Set()
    //looping over the string and we need to get k length substrings ,so looping from k to s.length else it will start to store undefinedvalues
    for (let i=k;i<=s.length;i++){
        //to the set we add substring(i,i-k) if i ,k then it will store more than k length substrings
        subStr.add(s.substring(i,i-k))
        console.log(subStr,i,i-k)
    }
    //if size of set and 2 power k equals it returns true
    return (subStr.size === (2**k)) // 2**2 => 00 01 10 11    
};
console.log(hasAllCodes(s,k)) */




///////////////////////////////////////////////////////////////////////////////////////


//////////////////day4
 

/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. */


//let nums= [1,2,3,4]
//var runningSum = function(nums) {


   /* //initialized a variable sum
    let sum=0
    //an empty arrayto have the total sums
    let runSum =[]
    //looping over
    for(let i=0;i<nums.length;i++){
        //for every i sum is increased and is pushed to runSum
        sum = sum + nums[i]
         runSum.push(sum)
    }
    return runSum */


    ///////////////////////////////////////////////////////////////////

    /* let sum = 0
    //for every num ,sum is added up and returned in an array
    let runSum = nums.map(num=>{
       // console.log(sum,num)
        return sum = num +sum
    })
    return runSum

};
console.log(runningSum(nums)) */

//************************************************************************************************** */

/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Input: strs = ["flower","flow","flight"]
Output: "fl" */

/* let strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return ""
    }
let prefix =strs[0]
for(let i=0;i<strs.length;i++){

    while (strs[i].indexOf(prefix)!==0){
        return  prefix= prefix.substring(0,prefix.length)
    }
}

}
console.log(longestCommonPrefix(strs)) */


//////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////day5

/* Given a 2D integer array matrix, return the transpose of matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices. 
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]*/

let matrix = [[1,2,3],
[4,5,6]]

var transpose = function(matrix) {
   /*  console.log(matrix[0])
    var trans = matrix[0].map((row,r)=>{return matrix.map((col,c)=> {return matrix[c][r]})})
    return trans */

    //******************************8 */

    let trans =[]
    //matrix[0].length represents length of nested array
    for(let i=0;i<matrix[0].length;i++){ //i loops up to 3
        //for every i a newcol is created
        let newCol=[]
        //j=0,1
        for(let j=0;j<matrix.length;j++){
          newCol.push(matrix[j][i]) //00 10 is stored in column => 1,4
        
        } //it is pushed to trans
        trans.push(newCol)
    }//after looping every i tras is returned
    return trans
};
console.log(transpose (matrix))









