/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (59.55%)
 * Likes:    371
 * Dislikes: 0
 * Total Accepted:    78.3K
 * Total Submissions: 131.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    const output: number[][] = [];
    nums.sort((a, b) => a - b);
    backtrack(output, [], nums);
    return output;
};
function backtrack(output: number[][], combine: number[], lefts: number[]) {
    if (lefts.length === 0) {
        output.push(combine);
        return;
    }
    for (let i = 0; i < lefts.length; i++) {
        if (i > 0 && lefts[i] === lefts[i - 1]) continue;
        let cur = Array.from(combine);
        cur.push(lefts[i]);
        let temp = lefts.slice(0, i).concat(lefts.slice(i + 1));
        backtrack(output, cur, temp);
    }
}
// @lc code=end

