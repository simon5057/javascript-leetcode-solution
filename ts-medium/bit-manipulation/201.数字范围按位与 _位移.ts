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
    let count = 0;
    while (m < n) {
        m >>>= 1;
        n >>>= 1;
        count++;
    }
    return n << count;
};
// @lc code=end

