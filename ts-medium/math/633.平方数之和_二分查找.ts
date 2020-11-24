/*
 * @lc app=leetcode.cn id=633 lang=typescript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (33.36%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    23.6K
 * Total Submissions: 70.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */

// @lc code=start
function judgeSquareSum(c: number): boolean {
  for (let i = 0; i * i <= c; i++) {
    let j = c - i * i;
    let l = 0;
    let r = j;
    while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);
      if (m * m === j) return true;
      if (m * m < j) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return false;
};
// @lc code=end

