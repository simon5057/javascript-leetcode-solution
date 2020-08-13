/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (67.49%)
 * Likes:    622
 * Dislikes: 0
 * Total Accepted:    133.8K
 * Total Submissions: 198.3K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    let m = grid.length;
    if (!m) return 0;
    let n = grid[0].length;
    const dp: number[] = Array.from({ length: grid[0].length }, () => 0);
    dp[0] = grid[0][0];
    for (let j = 1; j < n; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[j] = j > 0 ? (Math.min(dp[j], dp[j - 1]) + grid[i][j]) : (dp[j] + grid[i][j]);
        }
    }
    return dp[n - 1];
};
// @lc code=end

