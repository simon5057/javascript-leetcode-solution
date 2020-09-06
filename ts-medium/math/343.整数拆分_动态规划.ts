/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (58.70%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    61.4K
 * Total Submissions: 104.6K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 * 
 */

// @lc code=start
function integerBreak(n: number): number {
    const dp = [0, 1, 2, 4];
    if (n <= 4) return dp[n - 1];
    for (let i = 5; i <= n; i++) {
        if (i % 3 === 1) {
            dp[i - 1] = (dp[i - 2] / 3) * 2 * 2;
        } else {
            dp[i - 1] = (dp[i - 2] / 2) * 3;
        }
    }
    return dp[n - 1];
};
// @lc code=end
