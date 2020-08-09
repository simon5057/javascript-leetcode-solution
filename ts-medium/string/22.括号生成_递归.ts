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
// 每个括号可以用 (a)b 来表示，a 和 b 分别是一个合法的括号序列，并且可以为空
class Generate {
    cache: string[][] = [];
    gen(n: number): string[] {
        if (this.cache[n]) return this.cache[n];
        let res: string[] = [];
        if (n === 0) {
            res.push('');
        } else {
            for (let i = 0; i < n; i++) {
                for (const left of this.gen(i)) {
                    for (const right of this.gen(n - 1 - i)) {
                        res.push('(' + left + ')' + right);
                    }
                }
            }
        }
        this.cache[n] = res;
        return res;
    }
}

const gen = new Generate();
function generateParenthesis(n: number): string[] {
    return gen.gen(n);
};
// @lc code=end
