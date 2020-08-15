/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (35.76%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    36.4K
 * Total Submissions: 101.7K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。
 * 
 * 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: nums = [2,5,6,0,0,1,2], target = 0
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [2,5,6,0,0,1,2], target = 3
 * 输出: false
 * 
 * 进阶:
 * 
 * 
 * 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
 * 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
 * 
 * 
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = (l + r) >> 1;
        if (nums[m] === target) return true;
        // 如 [1,3,1,1,1] 3 
        // 左右相同，则左右指针压缩
        if (nums[m] === nums[l] && nums[m] === nums[r]) {
            l++;
            r--;
        } else if (nums[l] > nums[m]) {
            // 判断是否被旋转，若最左边大于中间值，则被旋转
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        } else {
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
    return false;
};
// @lc code=end

