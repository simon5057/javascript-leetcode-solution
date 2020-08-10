/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.30%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    73K
 * Total Submissions: 139.5K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = '';
    let curA, curB;
    let mod = 0;

    while (a.length || b.length) {
        if (a.length) {
            curA = a.slice(-1);
            a = a.slice(0, a.length - 1);
        } else {
            curA = 0;
        }
        if (b.length) {
            curB = b.slice(-1);
            b = b.slice(0, b.length - 1);
        } else {
            curB = 0;
        }
        let temp = mod + Number(curA) + Number(curB);
        let cur = temp % 2;
        if (temp > 1) {
            mod = 1;
        } else {
            mod = 0;
        }
        res = cur + res;
    }
    if (mod) res = mod + res;
    return res;
};

// @lc code=end