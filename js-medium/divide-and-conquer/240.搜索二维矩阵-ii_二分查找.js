/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (41.89%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    75.8K
 * Total Submissions: 180.8K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5'
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 
 * 示例:
 * 
 * 现有矩阵 matrix 如下：
 * 
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 * 
 * 
 * 给定 target = 5，返回 true。
 * 
 * 给定 target = 20，返回 false。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const row = matrix.length;
    if (!row) return false;
    const col = matrix[0].length;
    let len = Math.min(row, col);
    for (let i = 0; i < len; i++) {
        let verticalFound = binarySearch(matrix, i, target, true);
        let horizontalFound = binarySearch(matrix, i, target, false);
        if (verticalFound || horizontalFound) return true;
    }
    return false;
};

function binarySearch(matrix, start, target, vertical) {
    let left = start;
    let right;
    if (vertical) {
        right = matrix[0].length - 1;
        while (left <= right) {
            let mid = ((left + right) >> 1);
            if (matrix[start][mid] === target) return true;
            if (matrix[start][mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    } else {
        right = matrix.length - 1;
        while (left <= right) {
            let mid = ((left + right) >> 1);
            if (matrix[mid][start] === target) return true;
            if (matrix[mid][start] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }
}
// @lc code=end