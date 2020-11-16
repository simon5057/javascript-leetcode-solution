/*
 * @lc app=leetcode.cn id=576 lang=typescript
 *
 * [576] 出界的路径数
 *
 * https://leetcode-cn.com/problems/out-of-boundary-paths/description/
 *
 * algorithms
 * Medium (37.61%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    5.9K
 * Total Submissions: 15.8K
 * Testcase Example:  '2\n2\n2\n0\n0'
 *
 * 给定一个 m × n 的网格和一个球。球的起始坐标为 (i,j)
 * ，你可以将球移到相邻的单元格内，或者往上、下、左、右四个方向上移动使球穿过网格边界。但是，你最多可以移动 N
 * 次。找出可以将球移出边界的路径数量。答案可能非常大，返回 结果 mod 10^9 + 7 的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: m = 2, n = 2, N = 2, i = 0, j = 0
 * 输出: 6
 * 解释:
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入: m = 1, n = 3, N = 3, i = 0, j = 1
 * 输出: 12
 * 解释:
 * 
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 球一旦出界，就不能再被移动回网格内。
 * 网格的长度和高度在 [1,50] 的范围内。
 * N 在 [0,50] 的范围内。
 * 
 */

// @lc code=start
function findPaths(m: number, n: number, N: number, i: number, j: number): number {
  let dp: number[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  dp[i][j] = 1;
  let count = 0;
  for (let step = 1; step <= N; step++) {
    const temp = Array.from(dp, row => Array.from(row));
    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        if (dp[x][y]) {
          let way;
          if (way = outPaths(m, n, x, y, temp)) {
            count += dp[x][y] * way;
            count %= (10 ** 9 + 7)
          }
        }
      }
    }
    dp = temp;
  }
  return count %= (10 ** 9 + 7);
};
function outPaths(m: number, n: number, i: number, j: number, temp: number[][]): number {
  const direction: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let count = 0;
  for (const [x, y] of direction) {
    let a = x + i;
    let b = y + j;
    if (a < 0 || a >= m || b < 0 || b >= n) {
      count++;
    } else {
      temp[a][b] += temp[i][j] % (10 ** 9 + 7);
    }
  }
  temp[i][j] = 0;
  return count;
}
// @lc code=end

