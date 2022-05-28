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

