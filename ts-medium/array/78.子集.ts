/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (77.71%)
 * Likes:    705
 * Dislikes: 0
 * Total Accepted:    118.8K
 * Total Submissions: 152.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const res: number[][] = [];
    backtrack([], 0, nums, res);
    return res;
};
function backtrack(combines: number[], idx: number, nums: number[], output: number[][]) {
    output.push(combines);
    for (let i = idx; i < nums.length; i++) {
        let temp = Array.from(combines);
        temp.push(nums[i]);
        backtrack(temp, i + 1, nums, output);
    }
}
// @lc code=end

