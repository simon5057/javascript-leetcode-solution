/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (59.71%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    6.9K
 * Total Submissions: 11.6K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
 * 
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 
 * 你能在O(n)的时间解决这个问题吗？
 * 
 * 示例:
 * 
 * 
 * 输入: [3, 10, 5, 25, 2, 8]
 * 
 * 输出: 28
 * 
 * 解释: 最大的结果是 5 ^ 25 = 28.
 * 
 * 
 */

// @lc code=start
function findMaximumXOR(nums: number[]): number {
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(max, nums[i] ^ nums[j]);
        }
    }
    return max;
};
// @lc code=end

