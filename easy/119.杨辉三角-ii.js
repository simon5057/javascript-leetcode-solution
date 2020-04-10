/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (60.65%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    46.5K
 * Total Submissions: 76.6K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let cur = [1];
    let pre;
    for (let i = 1; i <= rowIndex; i++) {
        pre = cur;
        cur = [1];
        for (let j = 1; j < pre.length; j++) {
            cur.push(pre[j - 1] + pre[j]);
        }
        cur.push(1);
    }
    return cur;
};
// @lc code=end