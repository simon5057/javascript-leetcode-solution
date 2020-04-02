/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (49.98%)
 * Likes:    1780
 * Dislikes: 0
 * Total Accepted:    193.6K
 * Total Submissions: 387.4K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function helper(nums, left, right) {
    if (left === right) return nums[left];
    let p = Math.floor((left + right) / 2);

    let leftSubSum = helper(nums, left, p);
    let rightSubSum = helper(nums, p + 1, right);
    let crossSubSum = crossSum(nums, left, right, p);

    return Math.max(leftSubSum, rightSubSum, crossSubSum);
}

function crossSum(nums, left, right, p) {
    if (left === right) return nums[left];
    let curSum = 0;

    // 计算左边
    let leftSubSum = Number.MIN_SAFE_INTEGER;
    for (let i = p; i >= left; i--) {
        curSum += nums[i];
        leftSubSum = Math.max(leftSubSum, curSum);
    }

    // 计算右边
    curSum = 0;
    let rightSubSum = Number.MIN_SAFE_INTEGER;
    for (let i = p + 1; i <= right; i++) {
        curSum += nums[i];
        rightSubSum = Math.max(rightSubSum, curSum);
    }
    return leftSubSum + rightSubSum;
}
var maxSubArray = function (nums) {
    return helper(nums, 0, nums.length - 1);
};
// @lc code=end