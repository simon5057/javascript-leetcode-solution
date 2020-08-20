/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (68.65%)
 * Likes:    345
 * Dislikes: 0
 * Total Accepted:    42.4K
 * Total Submissions: 61.7K
 * Testcase Example:  '"aab"'
 *
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 
 * 返回 s 所有可能的分割方案。
 * 
 * 示例:
 * 
 * 输入: "aab"
 * 输出:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 */

// @lc code=start
function partition(s: string): string[][] {
    const len = s.length;
    const dp: boolean[][] = Array.from({ length: len }, () => Array.from({ length: len }, () => false));
    for (let right = 0; right < len; right++) {
        for (let left = 0; left <= right; left++) {
            if (s[left] === s[right] && (right - left <= 2 || dp[left + 1][right - 1])) {
                dp[left][right] = true;
            }
        }
    }
    function backtracking(combines: string[], start: number, output: string[][]) {
        if (start === len) {
            output.push(Array.from(combines));
            return;
        }
        for (let i = start; i < len; i++) {
            if (!dp[start][i]) continue;
            combines.push(s.substring(start, i + 1));
            backtracking(combines, i + 1, output);
            combines.pop();
        }
    }
    const res: string[][] = [];
    backtracking([], 0, res);
    return res;
};
// @lc code=end

