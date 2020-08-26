/*
 * @lc app=leetcode.cn id=201 lang=typescript
 *
 * [201] 数字范围按位与
 *
 * https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/description/
 *
 * algorithms
 * Medium (47.14%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    33.4K
 * Total Submissions: 65.5K
 * Testcase Example:  '5\n7'
 *
 * 给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。
 * 
 * 示例 1: 
 * 
 * 输入: [5,7]
 * 输出: 4
 * 
 * 示例 2:
 * 
 * 输入: [0,1]
 * 输出: 0
 * 
 */

// @lc code=start
function rangeBitwiseAnd(m: number, n: number): number {
    let l1 = [];
    while (m) {
        l1.unshift(m % 2);
        m >>>= 1;
    }
    let l2 = [];
    while (n) {
        l2.unshift(n % 2);
        n >>>= 1;
    }
    if (l1.length !== l2.length) return 0;
    let idx = 0;
    while (idx < l1.length && l1[idx] === l2[idx]) {
        idx++;
    }
    let res = 0;
    for (let i = 0; i < idx; i++) {
        if (l1[i] === 1) {
            res += (1 << l2.length - i - 1);
        }
    }
    return res;
};
// @lc code=end

