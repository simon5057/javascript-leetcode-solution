/*
 * @lc app=leetcode.cn id=646 lang=typescript
 *
 * [646] 最长数对链
 */

// @lc code=start
function findLongestChain(pairs: number[][]): number {
  const dp: number[] = Array.from(pairs, () => 1);
  pairs.sort(([a], [b]) => a - b);
  for (let i = 1; i < pairs.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};
// @lc code=end

