/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 *
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (59.71%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 28.6K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,1,2,3,3,4,4,8,8]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,3,7,7,10,11,11]
 * 输出: 10
 * 
 * 
 * 注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。
 * 
 */

// @lc code=start
function singleNonDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
  return nums[nums.length - 1];
};
// @lc code=end

