/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.96%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    35.1K
 * Total Submissions: 70.1K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    let carry = 0;
    let i = num1.length - 1;
    let res = [];
    for (let j = num2.length - 1; j >= 0; j--, i--) {
        let cur = Number(num1[i]) + Number(num2[j]) + carry;
        if (cur >= 10) {
            cur %= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        res.unshift(cur);
    }
    for (let k = i; k >= 0; k--) {
        let cur = Number(num1[k]) + carry;
        if (cur >= 10) {
            cur %= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        res.unshift(cur);
    }
    if(carry) res.unshift(1);
    return res.join('');
};
// @lc code=end