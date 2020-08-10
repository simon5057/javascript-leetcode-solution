/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (62.45%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    74K
 * Total Submissions: 118.4K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    return dfs(candidates, 0, target);
};

function dfs(candidates: number[], idx: number, target: number): number[][] {
    const res: number[][] = [];
    for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] === candidates[i - 1]) continue;
        const cur = candidates[i];
        if (cur > target) break;
        if (cur === target) {
            res.push([cur]);
            return res;
        }
        let sums = dfs(candidates, i + 1, target - cur);
        for (let j = 0; j < sums.length; j++) {
            let list: number[] = [cur];
            list.push(...sums[j]);
            res.push(list);
        }
    }
    return res;
}
// @lc code=end

