/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.27%)
 * Likes:    2527
 * Dislikes: 0
 * Total Accepted:    337.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const dp: boolean[][] = Array.from({ length: s.length }, v => []);
    let res: string = '';
    // 子串长度
    for (let len = 0; len < s.length; len++) {
        for (let i = 0; i < s.length; i++) {
            let j = i + len;
            if (j >= s.length) break;
            if (len === 0) {
                dp[i][j] = true;
            } else if (len === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            }
            if (dp[i][j] && res.length < len + 1) {
                res = s.substr(i, len + 1);
            }
        }
    }
    return res;
};
// @lc code=end

