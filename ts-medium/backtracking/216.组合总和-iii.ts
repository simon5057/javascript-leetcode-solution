/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (71.70%)
 * Likes:    153
 * Dislikes: 0
 * Total Accepted:    28.5K
 * Total Submissions: 39.7K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
    const res: number[][] = [];
    backtracking([], 1, n, res, k);
    return res;
};
function backtracking(combines: number[], start: number, leftSum: number, output: number[][], k: number) {
    if (combines.length === k) {
        if (leftSum === 0) output.push(combines);
        return;
    }
    for (let i = start; i <= 9; i++) {
        const temp = Array.from(combines);
        if (leftSum - i < 0) return;
        temp.push(i);
        backtracking(temp, i + 1, leftSum - i, output, k);
    }
}
// @lc code=end

