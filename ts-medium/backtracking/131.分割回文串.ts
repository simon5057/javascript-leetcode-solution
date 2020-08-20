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
    function backtracking(combines: string[], start: number, output: string[][]) {
        if (start === s.length) {
            output.push(Array.from(combines));
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (checkPalindrome(s.substring(start, i + 1))) {
                combines.push(s.substring(start, i + 1));
                backtracking(combines, i + 1, output);
                combines.pop();
            }
        }
    }
    const cache: { [key: string]: boolean } = {};
    function checkPalindrome(s: string): boolean {
        if (typeof cache[s] === 'boolean') return cache[s];
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) {
                cache[s] = false;
                return cache[s];
            }
            l++;
            r--;
        }
        cache[s] = true;
        return cache[s];
    }
    const res: string[][] = [];
    backtracking([], 0, res);
    return res;
};
// @lc code=end

