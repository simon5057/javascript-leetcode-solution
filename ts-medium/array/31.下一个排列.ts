/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (34.27%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    79.8K
 * Total Submissions: 232.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    if (nums.length < 2) return;
    let i = nums.length - 1;
    while (i > 0 && nums[i] <= nums[i - 1]) {
        i--;
    }
    let k = i;
    let l = nums.length - 1;
    if (i !== 0) {
        let d = i - 1;
        let j = i;
        while (nums[d] < nums[j] && j < nums.length) {
            j++;
        }
        j--;
        [nums[d], nums[j]] = [nums[j], nums[d]];
    }
    while (k < l) {
        [nums[k], nums[l]] = [nums[l], nums[k]];
        k++;
        l--;
    }
};
// @lc code=end

