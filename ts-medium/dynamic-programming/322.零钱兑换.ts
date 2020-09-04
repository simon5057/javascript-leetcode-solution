/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (41.20%)
 * Likes:    795
 * Dislikes: 0
 * Total Accepted:    129.6K
 * Total Submissions: 314.6K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    if (amount < 1) return 0;
    return helper(coins, amount, Array.from({ length: amount }, () => 0));
};
function helper(coins: number[], amount: number, dp: number[]): number {
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    if (dp[amount - 1]) return dp[amount - 1];
    let min = Infinity;
    for (const c of coins) {
        let res = helper(coins, amount - c, dp);
        if (res >= 0 && res < min) {
            min = res + 1;
        }
    }
    dp[amount - 1] = min === Infinity ? -1 : min;
    return dp[amount - 1];
}
// @lc code=end

