/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (40.11%)
 * Likes:    539
 * Dislikes: 0
 * Total Accepted:    119.2K
 * Total Submissions: 297.1K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    // 查找最左侧和 target 相等的索引 l1
    let l1 = 0;
    let r1 = nums.length - 1;
    while (l1 <= r1) {
        let m = (l1 + r1) >> 1;
        if (nums[m] >= target) {
            r1 = m - 1;
        } else {
            l1 = m + 1;
        }
    }
    // 查找最右侧和 target 相等的索引 r1
    let l2 = 0;
    let r2 = nums.length - 1;
    while (l2 <= r2) {
        let m = (l2 + r2) >> 1;
        if (nums[m] <= target) {
            l2 = m + 1;
        } else {
            r2 = m - 1;
        }
    }
    if (l1 > r2) return [-1, -1];
    return [l1, r2];
};
// @lc code=end

