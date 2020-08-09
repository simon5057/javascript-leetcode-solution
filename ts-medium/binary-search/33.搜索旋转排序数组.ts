/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (38.45%)
 * Likes:    870
 * Dislikes: 0
 * Total Accepted:    155.9K
 * Total Submissions: 405.3K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */

// @lc code=start
function search(nums: number[], target: number): number {
    if (!nums.length) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    let l: number = 0;
    let r: number = nums.length - 1;
    while (l <= r) {
        let m = (l + r) >> 1;
        if (nums[m] === target) return m;
        // 这里需要取 小于等于 （当只有两个元素时)
        if (nums[0] <= nums[m]) {
            // 如果落在左侧的有序列表
            if (nums[0] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            // 如果落到右边的有序列表
            if (target > nums[m] && target <= nums[nums.length - 1]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

