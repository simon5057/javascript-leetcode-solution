/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (48.31%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    24.4K
 * Total Submissions: 50.1K
 * Testcase Example:  '16'
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 16
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 先判断是否是2的幂，再判断是否是4的幂
var isPowerOfFour = function (num) {
    return num !== 0 && ((num & (num - 1)) === 0) && (num % 3 === 1);
};
// @lc code=end