/*
 * @lc app=leetcode.cn id=659 lang=typescript
 *
 * [659] 分割数组为连续子序列
 *
 * https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (54.25%)
 * Likes:    269
 * Dislikes: 0
 * Total Accepted:    24.7K
 * Total Submissions: 45.5K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。
 * 
 * 如果可以完成上述分割，则返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: [1,2,3,3,4,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3
 * 3, 4, 5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: [1,2,3,3,4,4,5,5]
 * 输出: True
 * 解释:
 * 你可以分割出这样两个连续子序列 : 
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入: [1,2,3,4,4,5]
 * 输出: False
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
function isPossible(nums: number[]): boolean {
  const countMap = new Map<number, number>();
  const tailMap = new Map<number, number>();
  for (const n of nums) {
    const count = countMap.get(n) || 0;
    countMap.set(n, count + 1);
  }
  for (const n of nums) {
    const count = countMap.get(n) || 0;
    if (count > 0) {
      let preTailCount = tailMap.get(n - 1) || 0;
      if (preTailCount > 0) {
        countMap.set(n, count - 1);
        tailMap.set(n - 1, preTailCount - 1);
        tailMap.set(n, (tailMap.get(n) || 0) + 1);
      } else {
        let count1 = countMap.get(n + 1) || 0;
        let count2 = countMap.get(n + 2) || 0;
        if (count1 > 0 && count2 > 0) {
          countMap.set(n, count - 1);
          countMap.set(n + 1, count1 - 1);
          countMap.set(n + 2, count2 - 1);
          tailMap.set(n + 2, (tailMap.get(n + 2) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end

