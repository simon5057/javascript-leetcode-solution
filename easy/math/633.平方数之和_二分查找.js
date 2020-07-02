/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (33.36%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    23.6K
 * Total Submissions: 70.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    for (let a = 0; a * a <= c; a++) {
        let b = c - a * a;
        if (binarySearch(0, b, b)) {
            return true;
        }
    }
    return false;
};

function binarySearch(l, r, n) {
    if (l > r) return false;
    let mid = (l + (r - l) / 2) >> 0;
    if (mid * mid === n) return true;
    if (mid * mid > n) return binarySearch(l, mid - 1, n);
    return binarySearch(mid + 1, r, n);
}
// @lc code=end