/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (36.86%)
 * Likes:    361
 * Dislikes: 0
 * Total Accepted:    39.4K
 * Total Submissions: 106.9K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 
 * 示例 1:
 * 
 * 输入: [10,2]
 * 输出: 210
 * 
 * 示例 2:
 * 
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 * 
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 */

// @lc code=start
function largestNumber(nums: number[]): string {
    const strList: string[] = Array.from(nums, n => String(n));
    strList.sort((a, b) => (b + a).localeCompare(a + b));
    let res = strList.join('');
    let i = 0;
    while (res[i] === '0' && i < res.length - 1) {
        i++;
    }
    return res.substring(i);
};
// @lc code=end

