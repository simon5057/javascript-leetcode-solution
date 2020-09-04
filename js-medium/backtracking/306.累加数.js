/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 *
 * https://leetcode-cn.com/problems/additive-number/description/
 *
 * algorithms
 * Medium (32.40%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    8.5K
 * Total Submissions: 26.1K
 * Testcase Example:  '"112358"'
 *
 * 累加数是一个字符串，组成它的数字可以形成累加序列。
 * 
 * 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 * 
 * 给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。
 * 
 * 说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 * 
 * 示例 1:
 * 
 * 输入: "112358"
 * 输出: true 
 * 解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * 
 * 示例 2:
 * 
 * 输入: "199100199"
 * 输出: true 
 * 解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 * 
 * 进阶:
 * 你如何处理一个溢出的过大的整数输入?
 * 
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    for (let i = 1; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let s1 = num.substring(0, i);
            let s2 = num.substring(i, j);
            if (s1.startsWith('0') && s1.length > 1 || s2.startsWith('0') && s2.length > 1) break;
            let pre = +s2;
            let temp = +s1 + +pre;
            if (dfs(temp, pre, num.substring(j))) return true;
        }
    }
    return false;
};

function dfs(combine, pre, num) {
    if (String(combine) === num) return true;
    if (!num.startsWith(String(combine))) return false;
    return dfs(pre + combine, combine, num.substring(String(combine).length));
}
// @lc code=end