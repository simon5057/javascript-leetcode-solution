/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.64%)
 * Likes:    341
 * Dislikes: 0
 * Total Accepted:    111.3K
 * Total Submissions: 295.8K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let low = 1;
    let high = x;
    let mid;
    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (mid * mid > x) {
            high = mid - 1;
        } else if (mid * mid < x) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    if (low * low > x) {
        return low - 1;
    }
    return low;
};

// @lc code=end