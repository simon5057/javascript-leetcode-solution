/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (40.89%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    73.7K
 * Total Submissions: 180.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length) return [];
    const res: number[] = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let right = n - 1;
    let bottom = m - 1;
    let left = 0;
    let nums = m * n;
    while (nums > 0) {
        for (let i = left; i <= right && nums > 0; i++) {
            res.push(matrix[top][i]);
            nums--;
        }
        top++;
        for (let i = top; i <= bottom && nums > 0; i++) {
            res.push(matrix[i][right]);
            nums--;
        }
        right--;
        for (let i = right; i >= left && nums > 0; i--) {
            res.push(matrix[bottom][i]);
            nums--;
        }
        bottom--;
        for (let i = bottom; i >= top && nums > 0; i--) {
            res.push(matrix[i][left]);
            nums--;
        }
        left++;
    }
    return res;
};
// @lc code=end

