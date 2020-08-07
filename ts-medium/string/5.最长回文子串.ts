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
    let res: string = '';
    let len: number = 0;
    for (let i = 0; i < s.length; i++) {
        b: for (let j = s.length - 1; j >= i; j--) {
            if (s[i] === s[j]) {
                let k = i + 1;
                let l = j - 1;
                while (k <= l) {
                    if (s[k] !== s[l]) continue b;
                    k++;
                    l--;
                }
                if (len < (j - i + 1)) {
                    len = j - i + 1;
                    res = s.substr(i, len);
                }
            }
        }
    }
    return res;
};
// @lc code=end

