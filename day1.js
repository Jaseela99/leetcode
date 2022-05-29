/* Given an integer num, return the number of steps to reduce it to zero.
In one step, if the current number is even, you have to divide it by 2,
otherwise, you have to subtract 1 from it. */

var numberOfSteps = function(num) {
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
console.log(numberOfSteps(14));


//----------------------------------------------------

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */


let nums = [2,7,11,15]
let target = 9

var twoSum = function(nums,target){
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


     let arr =[]
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


//----------------------------------------------------

/* Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 */
let x=12321
var isPalindrome = function(x) {
  /*  let y=  x.toString().split('').reverse().join('')* Math.sign(x)
  y === x ? console.log("true") : console.log("false") */
  
  
  /* let y = x.toString()
  for (let i=0;i < y.length/2;i++ ){
        let temp =y.charAt(i)
        y.charAt(i)=y.charAt(length-i-1)
        y.charAt(length-i-1) = temp
    }
    parseInt(y)===x? true :false */
};
isPalindrome(x)

//----------------------------------------------------


//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let num = [3,0,1]

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
console.log(missingNumber(num))


