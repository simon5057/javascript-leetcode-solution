/*
 * @lc app=leetcode.cn id=581 lang=typescript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (34.56%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    29.7K
 * Total Submissions: 85.7K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 
 * 你找到的子数组应是最短的，请输出它的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 
 * 说明 :
 * 
 * 
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 * 
 * 
 */

// @lc code=start
function findUnsortedSubarray(nums: number[]): number {
  const arr: number[] = Array.from(nums).sort((a, b) => a - b);
  let l;
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] !== nums[i]) {
      l = i;
      break;
    }
  }
  if (l == undefined) return 0;
  let r: number;
  for (let j = nums.length - 1; j >= 0; j--) {
    if (arr[j] !== nums[j]) {
      r = j;
      break;
    }
  }
  return r! - l + 1;
};
// @lc code=end

