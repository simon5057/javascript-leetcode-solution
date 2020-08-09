/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.96%)
 * Likes:    1219
 * Dislikes: 0
 * Total Accepted:    160.3K
 * Total Submissions: 211.1K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
let outputParenthesis: string[] = [];
function generateParenthesis(n: number): string[] {
    outputParenthesis = [];
    backtrack('', n, 0, 0);
    return outputParenthesis;
};
function backtrack(combine: string, n: number, left: number, right: number) {
    if (combine.length === n * 2) {
        outputParenthesis.push(combine);
        return;
    }
    if (left < n) {
        backtrack(combine + '(', n, left + 1, right);
    }
    if (right < left) {
        backtrack(combine + ')', n, left, right + 1);
    }
}
// @lc code=end
