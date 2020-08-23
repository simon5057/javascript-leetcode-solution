/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (40.18%)
 * Likes:    723
 * Dislikes: 0
 * Total Accepted:    88.4K
 * Total Submissions: 219.9K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
function maxProduct(nums: number[]): number {
    let maxF = nums[0];
    let minF = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let max = maxF;
        let min = minF;
        maxF = Math.max(max * nums[i], Math.max(min * nums[i], nums[i]));
        minF = Math.min(min * nums[i], Math.min(max * nums[i], nums[i]));
        res = Math.max(res, maxF);
    }
    return res;
};
// @lc code=end

