/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (39.52%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    44.9K
 * Total Submissions: 113.6K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    return reverseHelper(s, 0);
};

function reverseHelper(s, count) {
    if (count > 1) return false;
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] === s[r]) {
            l++;
            r--;
        } else {
            count++;
            return reverseHelper(s.slice(l, r), count) || reverseHelper(s.slice(l + 1, r + 1), count);
        }
    }
    return true;
}
// @lc code=end