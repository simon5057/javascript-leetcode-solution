/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (38.61%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    56.6K
 * Total Submissions: 146.6K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    if (!m) return false;
    let n = matrix[0].length;
    let l = 0;
    let r = m * n - 1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let i = (mid / n) >> 0;
        let j = mid % n;
        if (matrix[i][j] === target) return true;
        if (matrix[i][j] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};
// @lc code=end

