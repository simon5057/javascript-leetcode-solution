/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 *
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (49.35%)
 * Likes:    403
 * Dislikes: 0
 * Total Accepted:    57.3K
 * Total Submissions: 116.1K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 注意:
 * 
 * 
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1, 5, 11, 5]
 * 
 * 输出: true
 * 
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1, 2, 3, 5]
 * 
 * 输出: false
 * 
 * 解释: 数组不能分割成两个元素和相等的子集.
 * 
 * 
 * 
 * 
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum & 1) return false;
    sum /= 2;
    const dp: boolean[] = Array.from({ length: sum + 1 }, () => false);
    dp[0] = true;
    if (nums[0] <= sum) dp[nums[0]] = true;
    for (let i = 1; i < nums.length; i++) {
        for (let j = sum; j >= nums[i]; j--) {
            if (dp[sum]) return true;
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[sum];
};
// @lc code=end

