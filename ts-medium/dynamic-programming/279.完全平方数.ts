/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (57.61%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    83.3K
 * Total Submissions: 144.6K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 */

// @lc code=start
function numSquares(n: number): number {
    const dp: number[] = Array.from({ length: n + 1 }, () => Infinity);
    dp[0] = 0;
    const maxSqrt = (Math.sqrt(n) >> 0) + 1;
    const sqrts: number[] = [];
    for (let i = 1; i < maxSqrt; i++) {
        sqrts[i] = i * i;
    }
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s < maxSqrt; s++) {
            if (i < sqrts[s]) break;
            dp[i] = Math.min(dp[i], dp[i - sqrts[s]] + 1);
        }
    }
    return dp[n];
};
// @lc code=end

