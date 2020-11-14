/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (45.06%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    42.3K
 * Total Submissions: 93.8K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 
 * 两个相邻元素间的距离为 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[0,0,0]]
 * 
 * 输出：
 * [[0,0,0],
 * [0,1,0],
 * [0,0,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,1,1]]
 * 
 * 输出：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 * 
 * 
 */

// @lc code=start
function updateMatrix(matrix: number[][]): number[][] {
    const res: number[][] = Array.from(matrix,
        row => Array.from(row, () => Number.MAX_SAFE_INTEGER));
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) res[i][j] = 0;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);
            if (j - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i + 1 < m) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);
            if (j + 1 < n) res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
        }
    }
    return res;
};
// @lc code=end

