/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (50.19%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    21.2K
 * Total Submissions: 42.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,3]
 * 输出: 6
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,3,4]
 * 输出: 24
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let min1 = Number.MAX_VALUE,
        min2 = Number.MAX_VALUE;
    let max1 = -Number.MAX_VALUE,
        max2 = -Number.MAX_VALUE,
        max3 = -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (el < min1) {
            min2 = min1;
            min1 = el;
        } else if (el < min2) {
            min2 = el;
        }
        if (el > max1) {
            max3 = max2;
            max2 = max1;
            max1 = el;
        } else if (el > max2) {
            max3 = max2;
            max2 = el;
        } else if (el > max3) {
            max3 = el;
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// @lc code=end