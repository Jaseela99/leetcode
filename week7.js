/* Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4] */

var rightSideView = function(root) {
    if (!root) return [];
  let res = [];
  pre(root, 0);
  return res;
  
  function pre(node, h) {
      if (!node) return;
      res[h] = node.val;
      pre(node.left, h+1);
      pre(node.right, h+1);
  } 
};
//////////////////////////////////
/* You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. 
You want to use all the matchsticks to make one square.
 You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
Return true if you can make this square and false otherwise. */

var makesquare = function(matchsticks) {
  let n = matchsticks.length, side = matchsticks.reduce((a,c) => a + c) / 4
    matchsticks.sort((a,b) => b - a)
    if (side !== ~~side || matchsticks[0] > side)
        return false
    const btrack = (i, space, done) => {
        if (done === 3)
            return true
        for (; i < n; i++) {
            let num = matchsticks[i], res
            if (num > space)
                continue
            matchsticks[i] = side + 1
            if (num === space)
                res = btrack(1, side, done+1)
            else
                res = btrack(i+1, space-num, done)
            if (res)
                return true
            matchsticks[i] = num
            while (matchsticks[i+1] === num)
                i++
        }
        return false
    }
    return btrack(0, side, 0)  
};
///////////////////////////////////////
// Given the root of a binary tree, return the level order traversal of its nodes' values. 
/* (i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]] */
var levelOrder = function(root) {
    let q = [root], ans = []
   while (q[0]) {
       let qlen = q.length, row = []
       for (let i = 0; i < qlen; i++) {
           let curr = q.shift()
           row.push(curr.val)
           if (curr.left) q.push(curr.left)
           if (curr.right) q.push(curr.right)
       }
       ans.push(row)            
   }
   return ans
};