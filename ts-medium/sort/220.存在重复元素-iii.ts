/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (26.43%)
 * Likes:    213
 * Dislikes: 0
 * Total Accepted:    22.9K
 * Total Submissions: 86.6K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j
 * 的差的绝对值也小于等于 ķ 。
 * 
 * 如果存在则返回 true，不存在返回 false。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1, t = 2
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出: false
 * 
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        let j = 1;
        while (j <= k && j < nums.length) {
            if (Math.abs(nums[i] - nums[i + j]) <= t) return true;
            j++;
        }
    }
    return false;
};
// @lc code=end

