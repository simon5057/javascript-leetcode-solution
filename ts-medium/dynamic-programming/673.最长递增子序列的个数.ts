/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 *
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (37.01%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 45.5K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 * 
 */

// @lc code=start
function findNumberOfLIS(nums: number[]): number {
  const len = nums.length;
  const lengths = Array.from({ length: len }, () => 0);
  const counts = Array.from({ length: len }, () => 1);
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        if (lengths[i] >= lengths[j]) {
          lengths[j] = lengths[i] + 1;
          counts[j] = counts[i];
        } else if (lengths[i] + 1 === lengths[j]) {
          counts[j] += counts[i];
        }
      }
    }
  }
  let longest = 0;
  let count = 0;
  for (const l of lengths) {
    longest = Math.max(longest, l);
  }
  for (let i = 0; i < len; i++) {
    if (lengths[i] === longest) count += counts[i];
  }
  return count;
};
// @lc code=end

