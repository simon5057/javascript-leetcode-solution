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
const cache = {};
var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [
        [1]
    ];
    if (numRows === 2) return [
        [1],
        [1, 1]
    ];
    if (cache[numRows]) return cache[numRows];

    const res = [...generate(numRows - 1)];
    const lastOne = res[res.length - 1];
    const arr = [lastOne[0]];
    for (let i = 0; i < lastOne.length - 1; i++) {
        arr.push(lastOne[i] + lastOne[i + 1]);
    }
    arr.push(lastOne[lastOne.length-1]);
    res.push(arr);
    cache[numRows] = res;
    return res;
};
// @lc code=end