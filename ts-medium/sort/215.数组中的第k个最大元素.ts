/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.36%)
 * Likes:    675
 * Dislikes: 0
 * Total Accepted:    192.7K
 * Total Submissions: 299.4K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明: 
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
    return quickSort(nums, 0, nums.length - 1, nums.length - k);
};
function quickSort(nums: number[], l: number, r: number, idx: number): number {
    let x = partition(nums, l, r);
    if (x === idx) return nums[idx];
    if (x < idx) {
        return quickSort(nums, x + 1, r, idx);
    } else {
        return quickSort(nums, l, x - 1, idx);
    }
}
function partition(nums: number[], l: number, r: number) {
    let x = (Math.random() * (r - l + 1) + l) >> 0;
    [nums[x], nums[r]] = [nums[r], nums[x]];
    let m = nums[r];
    let i = l - 1;
    for (let j = l; j < r; j++) {
        if (nums[j] <= m) {
            ++i;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[i + 1], nums[r]] = [nums[r], nums[i + 1]];
    return i + 1;
}
// @lc code=end

