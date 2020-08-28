/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 *
 * [1556] 千位分隔数
 *
 * https://leetcode-cn.com/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (62.21%)
 * Likes:    0
 * Dislikes: 0
 * Total Accepted:    3.5K
 * Total Submissions: 5.6K
 * Testcase Example:  '987'
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 987
 * 输出："987"
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 1234
 * 输出："1.234"
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 123456789
 * 输出："123.456.789"
 * 
 * 
 * 示例 4：
 * 
 * 输入：n = 0
 * 输出："0"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n < 2^31
 * 
 * 
 */

// @lc code=start
function thousandSeparator(n: number): string {
    if (n === 0) return '0';
    let res = '';
    while (n) {
        let s = String(n % 1000);
        n = (n / 1000) >>> 0;
        if (!!n) {
            while (s.length !== 3) {
                s = '0' + s;
            }
        }
        res = s + '.' + res;
    }
    return res.substr(0, res.length - 1);
};
// @lc code=end

