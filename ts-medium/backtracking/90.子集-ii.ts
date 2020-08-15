/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (60.69%)
 * Likes:    289
 * Dislikes: 0
 * Total Accepted:    43.9K
 * Total Submissions: 72.4K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    backtrack([], 0, nums, res);
    return res;
};
function backtrack(combines: number[], idx: number, nums: number[], output: number[][]) {
    output.push(combines);
    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] === nums[i - 1]) continue;
        let temp = Array.from(combines);
        temp.push(nums[i]);
        backtrack(temp, i + 1, nums, output);
    }
}
// @lc code=end

