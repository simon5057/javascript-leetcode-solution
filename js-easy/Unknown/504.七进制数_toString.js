/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 *
 * https://leetcode-cn.com/problems/base-7/description/
 *
 * algorithms
 * Easy (49.12%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 26.4K
 * Testcase Example:  '100'
 *
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 100
 * 输出: "202"
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: -7
 * 输出: "-10"
 * 
 * 
 * 注意: 输入范围是 [-1e7, 1e7] 。
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    return num.toString(7);
};
// @lc code=end

