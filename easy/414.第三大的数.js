/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 *
 * https://leetcode-cn.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (35.05%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 76K
 * Testcase Example:  '[3,2,1]'
 *
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3, 2, 1]
 * 
 * 输出: 1
 * 
 * 解释: 第三大的数是 1.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1, 2]
 * 
 * 输出: 2
 * 
 * 解释: 第三大的数不存在, 所以返回最大的数 2 .
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [2, 2, 3, 1]
 * 
 * 输出: 1
 * 
 * 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
 * 存在两个值为2的数，它们都排第二。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let one = nums[0];
    let two = -Infinity;
    let three = -Infinity;
    for (let n of nums) {
        if (n === one || n === two || n == three) continue;
        if (n > one) {
            three = two;
            two = one;
            one = n;
        } else if (n > two) {
            three = two;
            two = n;
        } else if (n > three) {
            three = n;
        }
    }
    if (three === -Infinity) {
        return one;
    } else {
        return three;
    }
};
// @lc code=end