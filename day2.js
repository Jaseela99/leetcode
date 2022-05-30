/* Given a string array words, return the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters.
 If no such two words exist, return 0. */


 /* let  words = ["abcw","baz","foo","bar","xtfn","abcdef"]

 var maxProduct = function(words){
      for (let i=0;i<words.length;i++){
         for (let j=i+1;j<words.length;j++){
            if(words[i].substring(0,words[i].length)!==words[j].substring(0,words[j].length)){
            return   words[i].length * words[j].length 
            }else{
                return 0
            }
         }
     }   
    
 }
 console.log(maxProduct(words)) */

 //**************************************************************** 
 
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


 //**************************************************************** 

/*  Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor. */

let dividend =-2147483648
let divisor =-1

var divide = function(dividend, divisor) {
  let  quotient = 0
  divid = Math.abs(dividend)
  divis =Math.abs(divisor)
    while(divid >= divis){
        divid -= divis
        quotient++
    }
    if((dividend<0 && divisor<0 )|| (dividend>0 && divisor>0)){
        return quotient 
    }else{
        return quotient = -quotient
    }
    
};

console.log(divide(dividend,divisor)) 













/////////////////////////////////////////////////////////////////////////////////////

//discussed question
/* 
 let nums=[0,1,2,2,4,3,2,0,5]
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
 






