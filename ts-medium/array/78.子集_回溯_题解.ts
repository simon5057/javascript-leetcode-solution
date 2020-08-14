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
    function backtrack(combines: number[], start: number) {
        res.push(Array.from(combines));
        for (let i = start; i < nums.length; i++) {
            combines.push(nums[i]);
            backtrack(combines, i + 1);
            combines.pop();
        }
    }
    backtrack([], 0);
    return res;
};
// @lc code=end

