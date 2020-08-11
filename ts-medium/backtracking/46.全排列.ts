/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.62%)
 * Likes:    833
 * Dislikes: 0
 * Total Accepted:    168.4K
 * Total Submissions: 219.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
let output: number[][] = [];
function permute(nums: number[]): number[][] {
    output = [];
    backtrack([], nums);
    return output;
};
function backtrack(combine: number[], leftNums: number[]) {
    if (leftNums.length === 0) {
        output.push(combine);
        return;
    } else {
        for (let i = 0; i < leftNums.length; i++) {
            let temp = leftNums.slice(0, i).concat(leftNums.slice(i + 1));
            let cur = Array.from(combine);
            cur.push(leftNums[i]);
            backtrack(cur, temp);
        }
    }
}
// @lc code=end

