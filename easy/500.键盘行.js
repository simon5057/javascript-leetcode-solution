/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (69.11%)
 * Likes:    97
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 25.4K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 你可以重复使用键盘上同一字符。
 * 你可以假设输入的字符串将只包含字母。
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const lines = [
        new Set('QWERTYUIOP'),
        new Set('ASDFGHJKL'),
        new Set('ZXCVBNM'),
    ]
    const res = [];
    wrap: for (let w of words) {
        upW = w.toUpperCase();
        let cur;
        for (const l of lines) {
            if (l.has(upW[0])) {
                cur = l;
                break;
            }
        }
        for (const ch of upW) {
            if (!cur.has(ch)) {
                continue wrap;
            }
        }
        res.push(w);
    }
    return res;
};
// @lc code=end