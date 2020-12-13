/*
 * @lc app=leetcode.cn id=646 lang=typescript
 *
 * [646] 最长数对链
 */

// @lc code=start
function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);
  let cur = -Number.MAX_SAFE_INTEGER;
  let res = 0;
  for (const [x, y] of pairs) {
    if (cur < x) {
      cur = y;
      res++;
    }
  }
  return res;
};
// @lc code=end

