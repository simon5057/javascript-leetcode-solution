/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (37.27%)
 * Likes:    210
 * Dislikes: 0
 * Total Accepted:    23.9K
 * Total Submissions: 63.8K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var convertToTitle = function (n) {
    let res = '';
    while (n > 0) {
        let cur = n % 26;
        if (cur === 0) {
            cur = 26;
            n--;
        }
        res = digits[cur - 1] + res;
        n = Math.floor(n / 26);
    }
    return res;
};
// @lc code=end