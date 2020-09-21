/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第N个数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Medium (38.06%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    11K
 * Total Submissions: 28.7K
 * Testcase Example:  '3'
 *
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 
 * 注意:
 * n 是正数且在32位整数范围内 ( n < 2^31)。
 * 
 * 示例 1:
 * 
 * 输入:
 * 3
 * 
 * 输出:
 * 3
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 11
 * 
 * 输出:
 * 0
 * 
 * 说明:
 * 第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
 * 
 * 
 */

// @lc code=start
function findNthDigit(n: number): number {
    let i = 1;
    let x = n;
    let count = 1;
    let cur = i * count * 9;
    while (x > cur) {
        x -= cur;
        i *= 10;
        count++;
        cur = i * count * 9;
    }
    let mod = x % count;
    let pre = ((x / count) - 1) >> 0;
    let r = pre + i;
    if (mod === 0) return r % 10;
    return +String(r + 1)[mod - 1];
};
// @lc code=end

