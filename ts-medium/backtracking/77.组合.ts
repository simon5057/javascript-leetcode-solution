/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (74.45%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    67.6K
 * Total Submissions: 90.8K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    backtrack([], 0, n, k, res);
    return res;
};
function backtrack(combines: number[], start: number, n: number, k: number, output: number[][]) {
    if (n - start < k) return;
    if (n - start === k) {
        for (let i = start + 1; i <= n; i++) {
            combines.push(i);
        }
        output.push(combines);
        return;
    }
    if (!k) {
        output.push(combines);
        return;
    }
    for (let i = start; i < n; i++) {
        let temp = Array.from(combines);
        temp.push(i + 1);
        backtrack(temp, i + 1, n, k - 1, output);
    }
}
// @lc code=end

