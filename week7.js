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


  ////////////////////////////////////////////
/*   There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.
Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6 */

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    if (!maxMove) return 0
        let dpCurr = Array.from({length: m+2}, () => new Uint32Array(n+2)),
            dpLast = Array.from({length: m+2}, () => new Uint32Array(n+2))
        for (let i = 1; i <= m; i++)
            dpCurr[i][1]++, dpCurr[i][n]++
        for (let j = 1; j <= n; j++)
            dpCurr[1][j]++, dpCurr[m][j]++
        let ans = dpCurr[startRow+1][startColumn+1]
        for (let d = 1; d < maxMove; d++) {
            [dpCurr, dpLast] = [dpLast, dpCurr]
            for (let i = 1; i <= m; i++)
                for (let j = 1; j <= n; j++)
                    dpCurr[i][j] = (dpLast[i-1][j] + dpLast[i+1][j] + dpLast[i][j-1] + dpLast[i][j+1]) % 1000000007
            ans = (ans + dpCurr[startRow+1][startColumn+1]) % 1000000007
        }
        return ans    
    };

    //////////////////////////////////////
  /*   For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].
Given two integers n and k, return the number of different arrays consist of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.
Input: n = 3, k = 0
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs. */

var kInversePairs = function(n, k) {
    let mod = 1000000007;
          if (k > n*(n-1)/2 || k < 0) return 0;
          let dp = new Array(n+1).fill(0).map(() => new Array(k+1).fill(0));
          for (let i = 1; i <= n; i++) {
              dp[i][0] = 1;
              if (i + 1 <= n) dp[i + 1][0] = 1;
              for (let j = 1; j <= Math.min(k, i*(i-1)/2); j++) {
                  dp[i][j] = dp[i][j-1] + dp[i-1][j];
                  if (j >= i) dp[i][j] -= dp[i-1][j-i];
                  dp[i][j] = (dp[i][j]+mod) % mod;
              }
          }
          return dp[n][k];   
  };
  ///////////////////////////////

 /*  Given a matrix and a target, return the number of non-empty submatrices that sum to target.
A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.
Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.
  */
var numSubmatrixSumTarget = function(M, T) {
    let xlen = M[0].length, ylen = M.length,
       ans = 0, res = new Map(), csum
   for (let i = 0, r = M[0]; i < ylen; r = M[++i]) 
       for (let j = 1; j < xlen; j++)
           r[j] += r[j-1]
   for (let j = 0; j < xlen; j++)
       for (let k = j; k < xlen; k++) {
           res.clear(), res.set(0,1), csum = 0
           for (let i = 0; i < ylen; i++) {
               csum += M[i][k] - (j ? M[i][j-1] : 0)
               ans += (res.get(csum - T) || 0)
               res.set(csum, (res.get(csum) || 0) + 1)
           }
       }
   return ans
};