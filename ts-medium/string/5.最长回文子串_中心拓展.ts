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
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (end - start < len - 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};
function expand(s: string, l: number, r: number): number {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        r++;
        l--;
    }
    return r - l - 1;
}
// @lc code=end

