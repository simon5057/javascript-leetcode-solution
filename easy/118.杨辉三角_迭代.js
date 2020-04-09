/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (66.09%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    70.1K
 * Total Submissions: 106K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = [];
    if (numRows === 0) return triangle;
    triangle.push([1]);
    let row, preRow;
    for (let i = 1; i < numRows; i++) {
        row = [1];
        preRow = triangle[i - 1]
        for (let j = 1; j < preRow.length; j++) {
            row.push(preRow[j - 1] + preRow[j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};
// @lc code=end