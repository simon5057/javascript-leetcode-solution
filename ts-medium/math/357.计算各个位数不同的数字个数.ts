/*
 * @lc app=leetcode.cn id=357 lang=typescript
 *
 * [357] 计算各个位数不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (51.40%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 24.5K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n 。
 * 
 * 示例:
 * 
 * 输入: 2
 * 输出: 91 
 * 解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
 * 
 * 
 */

// @lc code=start
function countNumbersWithUniqueDigits(n: number): number {
    if (n === 0) return 1;
    let first = 10;
    let second = 9 * 9;
    const size = Math.min(n, 10);
    for (let i = 2; i <= size; i++) {
        first += second;
        second *= (10 - i);
    }
    return first;
};
// @lc code=end

