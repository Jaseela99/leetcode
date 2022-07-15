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
///////////////////
/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7] */

var buildTree = function(preorder, inorder) {
    let M = new Map()
    for (let i = 0; i < inorder.length; i++)
        M.set(inorder[i], i)
    return splitTree(preorder, M, 0, 0, inorder.length-1)
};

var splitTree = function(preorder, M, pix, ileft, iright) {
    let rval = preorder[pix],
        root = new TreeNode(rval),
        imid = M.get(rval)
    if (imid > ileft)
        root.left = splitTree(preorder, M, pix+1, ileft, imid-1)
    if (imid < iright)
        root.right = splitTree(preorder, M, pix+imid-ileft+1, imid+1, iright)
    return root 
};

/////////////////////////////

/* You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0. 
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
*/

var maxAreaOfIsland = function(grid) {
    let ans = 0, n = grid.length, m = grid[0].length
      const trav = (i, j) => {
          if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
          grid[i][j] = 0
          return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
      }
      for (let i = 0; i < n; i++) 
          for (let j = 0; j < m; j++)
              if (grid[i][j]) ans = Math.max(ans, trav(i, j))
      return ans  
  };