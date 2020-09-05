/*
 * @lc app=leetcode.cn id=324 lang=typescript
 *
 * [324] 摆动排序 II
 *
 * https://leetcode-cn.com/problems/wiggle-sort-ii/description/
 *
 * algorithms
 * Medium (36.02%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 39.8K
 * Testcase Example:  '[1,5,1,1,6,4]'
 *
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1, 5, 1, 1, 6, 4]
 * 输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
 * 
 * 示例 2:
 * 
 * 输入: nums = [1, 3, 2, 2, 3, 1]
 * 输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
 * 
 * 说明:
 * 你可以假设所有输入都会得到有效的结果。
 * 
 * 进阶:
 * 你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    let mid = (nums.length >> 1);
    quickSort(nums, 0, nums.length, mid);
    let medium = nums[mid];
    let i = 0;
    let j = 0;
    let k = nums.length - 1;
    while (j < k) {
        // 当前数大于中位数，放到最右边
        if (nums[j] > medium) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            k--;
        } else if (nums[j] < medium) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else {
            j++;
        }
    }
    if ((nums.length & 1) === 1) mid++;

    const temp1 = nums.slice(0, mid);
    const temp2 = nums.slice(mid);
    for (let i = 0; i < temp1.length; i++) {
        nums[i * 2] = temp1[temp1.length - 1 - i];
    }
    for (let j = 0; j < temp2.length; j++) {
        nums[j * 2 + 1] = temp2[temp2.length - 1 - j]
    }
};
function quickSort(nums: number[], start: number, end: number, n: number) {
    let t = nums[end - 1];
    let i = start;
    let j = start;
    while (j < end) {
        if (nums[j] <= t) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++;
    }
    // 当前位置在中位数的右边
    if (i - 1 > n) {
        quickSort(nums, start, i - 1, n);
    } else if (i <= n) {
        quickSort(nums, i, end, n);
    }
}
// @lc code=end

