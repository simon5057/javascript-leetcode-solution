/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (45.13%)
 * Likes:    672
 * Dislikes: 0
 * Total Accepted:    77.7K
 * Total Submissions: 172.1K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * 
 * 示例 1 :
 * 
 * 
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 * 
 * 
 * 说明 :
 * 
 * 
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 * 
 * 
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let pre = sum - k;
    if (map.has(pre)) {
      count += map.get(pre);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
// @lc code=end

