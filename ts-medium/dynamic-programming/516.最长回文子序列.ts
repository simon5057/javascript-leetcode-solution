/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (58.09%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    31.2K
 * Total Submissions: 53.7K
 * Testcase Example:  '"bbbab"'
 *
 * 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。
 * 
 * 
 * 
 * 示例 1:
 * 输入:
 * 
 * "bbbab"
 * 
 * 
 * 输出:
 * 
 * 4
 * 
 * 
 * 一个可能的最长回文子序列为 "bbbb"。
 * 
 * 示例 2:
 * 输入:
 * 
 * "cbbd"
 * 
 * 
 * 输出:
 * 
 * 2
 * 
 * 
 * 一个可能的最长回文子序列为 "bb"。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 只包含小写英文字母
 * 
 * 
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
    const dp: number[][] = Array.from(s, () => Array.from(s, () => 0));
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
        if (i !== 0) {
            dp[i - 1][i] = s[i] === s[i - 1] ? 2 : 1;
        }
    }
    for (let i = 2; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i - 1], dp[j + 1][j + i]);
            if (s[j] === s[j + i]) {
                dp[j][j + i] = Math.max(dp[j + 1][j + i - 1] + 2, dp[j][j + i])
            }
        }
    }
    return dp[0][s.length - 1];
};
// @lc code=end

