/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 *
 * https://leetcode-cn.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (64.61%)
 * Likes:    450
 * Dislikes: 0
 * Total Accepted:    73.2K
 * Total Submissions: 113.3K
 * Testcase Example:  '"abc"'
 *
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 * 
 * 
 * 示例 2：
 * 
 * 输入："aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入的字符串长度不会超过 1000 。
 * 
 * 
 */

// @lc code=start
function countSubstrings(s: string): number {
  const dp: boolean[][] = Array.from(s, () => Array.from(s, () => !!0));
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = !!1;
    res++;
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = !!1;
      res++;
    }
  }

  for (let i = 2; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      if (s[j] === s[j + i] && dp[j + 1][j + i - 1]) {
        dp[j][j + i] = !!1;
        res++;
      }
    }
  }
  return res;
};
// @lc code=end

