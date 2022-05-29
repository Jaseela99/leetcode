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