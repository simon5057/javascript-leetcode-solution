/*
 * @lc app=leetcode.cn id=522 lang=typescript
 *
 * [522] 最长特殊序列 II
 *
 * https://leetcode-cn.com/problems/longest-uncommon-subsequence-ii/description/
 *
 * algorithms
 * Medium (34.49%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    4.6K
 * Total Submissions: 13.4K
 * Testcase Example:  '["aba","cdc","eae"]'
 *
 * 给定字符串列表，你需要从它们中找出最长的特殊序列。最长特殊序列定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。
 * 
 * 子序列可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。
 * 
 * 输入将是一个字符串列表，输出是最长特殊序列的长度。如果最长特殊序列不存在，返回 -1 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: "aba", "cdc", "eae"
 * 输出: 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 所有给定的字符串长度不会超过 10 。
 * 给定字符串列表的长度将在 [2, 50 ] 之间。
 * 
 * 
 * 
 * 
 */

// @lc code=start
function findLUSlength(strs: string[]): number {
    strs.sort((a, b) => b.length - a.length);
    for (let i = 0; i < strs.length; i++) {
        let flag = true;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            if (isSubsequence(strs[i], strs[j])) {
                flag = false;
                break;
            }
        }
        if (flag) return strs[i].length;
    }
    return -1;
};
function isSubsequence(x: string, y: string): boolean {
    let j = 0;
    for (let i = 0; j < x.length && i < y.length; i++) {
        if (x[j] === y[i]) j++;
    }
    return x.length === j;
}
// @lc code=end

