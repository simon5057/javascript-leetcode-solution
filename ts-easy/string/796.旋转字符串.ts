/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 *
 * https://leetcode-cn.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (50.59%)
 * Likes:    91
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 21.9K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * 给定两个字符串, A 和 B。
 * 
 * A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea'
 * 。如果在若干次旋转操作之后，A 能变成B，那么返回True。
 * 
 * 
 * 示例 1:
 * 输入: A = 'abcde', B = 'cdeab'
 * 输出: true
 * 
 * 示例 2:
 * 输入: A = 'abcde', B = 'abced'
 * 输出: false
 * 
 * 注意：
 * 
 * 
 * A 和 B 长度不超过 100。
 * 
 * 
 */

// @lc code=start
function rotateString(A: string, B: string): boolean {
    return A.length === B.length && A.repeat(2).includes(B);
};
// @lc code=end

