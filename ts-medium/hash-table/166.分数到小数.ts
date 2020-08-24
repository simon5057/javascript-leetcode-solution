/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 *
 * https://leetcode-cn.com/problems/fraction-to-recurring-decimal/description/
 *
 * algorithms
 * Medium (27.23%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    14.6K
 * Total Submissions: 53.5K
 * Testcase Example:  '1\n2'
 *
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。
 * 
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 
 * 示例 1:
 * 
 * 输入: numerator = 1, denominator = 2
 * 输出: "0.5"
 * 
 * 
 * 示例 2:
 * 
 * 输入: numerator = 2, denominator = 1
 * 输出: "2"
 * 
 * 示例 3:
 * 
 * 输入: numerator = 2, denominator = 3
 * 输出: "0.(6)"
 * 
 * 
 */

// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) return '0';
    let m = numerator;
    let n = denominator;
    let res = '';
    if (Number(m < 0) ^ Number(n < 0)) res = '-' + res;
    m = Math.abs(m);
    n = Math.abs(n);
    res += String((m / n) >>> 0);
    let remainder = m % n;
    if (remainder === 0) return res;
    res += '.';
    const map: { [key: number]: number } = {};
    while (remainder !== 0) {
        if (map[remainder]) {
            res = res.substring(0, map[remainder]) + '(' + res.substring(map[remainder]) + ')';
            break;
        }
        map[remainder] = res.length;
        remainder *= 10;
        res += String((remainder / n) >> 0);
        remainder %= n;
    }
    return res;
};
// @lc code=end

