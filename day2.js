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
 

/*  Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor. */

let dividend =2147483648
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
 






