/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (44.36%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    83.8K
 * Total Submissions: 188.8K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续
 * 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 * 
 * 
 */

// @lc code=start
function minSubArrayLen(s: number, nums: number[]): number {
    let len = nums.length;
    if (len === 0) return 0;
    const sums = Array.from({ length: len + 1 }, () => 0);
    for (let i = 1; i <= len; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }
    let res = Infinity;
    for (let i = 1; i <= len; i++) {
        let bound = binarySearch(sums, i, len, sums[i - 1] + s);
        if (bound !== -1) {
            res = Math.min(res, bound - i + 1);
        }
    }
    if (res === Infinity) return 0;
    return res;
};
function binarySearch(sums: number[], l: number, r: number, target: number) {
    if (sums[r] < target) return -1;
    while (l < r) {
        let mid = (l + r) >>> 1;
        if (sums[mid] >= target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}
// @lc code=end

