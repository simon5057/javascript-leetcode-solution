/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (36.30%)
 * Likes:    466
 * Dislikes: 0
 * Total Accepted:    115.7K
 * Total Submissions: 318.7K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 说明:
 * 
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 * 
 * 
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if (x === 0) return 0;
    if (n === 0) return 1;
    let symbol = 1;
    if (x < 0 && n % 2 !== 0) symbol = -1;
    let a = Math.abs(x);
    let b = Math.abs(n);
    if (x === 1 || x === -1) return symbol * a;
    let res = getPow(b, a);
    if (n < 0) res = 1 / res;
    return symbol * res;
};
function getPow(total: number, a: number) {
    if (total === 1) return a;
    let count = 1;
    let res = a;
    while (count * 2 <= total) {
        res *= res;
        count *= 2;
    }
    if (count < total) {
        res *= getPow(total - count, a);
    }
    return res;
}
// @lc code=end

