/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (59.71%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    6.9K
 * Total Submissions: 11.6K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
 * 
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 
 * 你能在O(n)的时间解决这个问题吗？
 * 
 * 示例:
 * 
 * 
 * 输入: [3, 10, 5, 25, 2, 8]
 * 
 * 输出: 28
 * 
 * 解释: 最大的结果是 5 ^ 25 = 28.
 * 
 * 
 */

// @lc code=start
function findMaximumXOR(nums: number[]): number {
    let max = nums[0];
    for (const n of nums) {
        max = Math.max(max, n);
    }
    let len = max.toString(2).length;
    let maxXor = 0;
    let curXor;
    let prefixes = new Set<number>();
    for (let i = len - 1; i >= 0; i--) {
        maxXor <<= 1;
        curXor = maxXor | 1;
        prefixes.clear();
        for (const n of nums) {
            prefixes.add(n >> i);
        }
        for (const p of prefixes) {
            if (prefixes.has(p ^ curXor)) {
                maxXor = curXor;
                break;
            }
        }
    }
    return maxXor;
};
// @lc code=end

