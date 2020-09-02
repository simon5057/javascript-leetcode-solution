/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (45.19%)
 * Likes:    946
 * Dislikes: 0
 * Total Accepted:    139.5K
 * Total Submissions: 308.6K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums.length) return 0;
    let len = 1;
    const d = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > d[len - 1]) {
            d[len++] = nums[i];
        } else {
            let l = 0;
            let r = len - 1;
            while (l <= r) {
                let mid = ((l + r) >> 1);
                if (d[mid] < nums[i]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            d[l] = nums[i];
        }
    }
    return len
};
// @lc code=end