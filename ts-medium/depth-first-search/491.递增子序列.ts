/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (55.97%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    29.3K
 * Total Submissions: 52.4K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 
 * 示例:
 * 
 * 
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 * 
 * 说明:
 * 
 * 
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 * 
 * 
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
    const res: number[][] = [];
    function dfs(idx: number, last: number, combine: number[]) {
        if (idx === nums.length) {
            if (combine.length >= 2) res.push([...combine]);
            return;
        }
        if (nums[idx] >= last) {
            combine.push(nums[idx]);
            dfs(idx + 1, nums[idx], combine);
            combine.pop();
        }
        if (nums[idx] != last) {
            dfs(idx + 1, last, combine);
        }
    }
    dfs(0, -Number.MAX_VALUE, []);
    return res;
};
// @lc code=end

