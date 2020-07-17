/*
 * @lc app=leetcode.cn id=821 lang=typescript
 *
 * [821] 字符的最短距离
 *
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/description/
 *
 * algorithms
 * Easy (67.12%)
 * Likes:    138
 * Dislikes: 0
 * Total Accepted:    13.3K
 * Total Submissions: 19.8K
 * Testcase Example:  '"loveleetcode"\n"e"'
 *
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * 
 * 示例 1:
 * 
 * 
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 * 
 * 说明:
 * 
 * 
 * 字符串 S 的长度范围为 [1, 10000]。
 * C 是一个单字符，且保证是字符串 S 里的字符。
 * S 和 C 中的所有字母均为小写字母。
 * 
 * 
 */

// @lc code=start
function shortestToChar(S: string, C: string): number[] {
    const res: number[] = Array.from({ length: S.length, 0: 0 }).fill(Infinity);
    let i = 0;
    let j = S.length - 1;
    while (i < S.length && j >= 0) {
        if (S[i] === C) res[i] = 0;
        if (S[j] === C) res[j] = 0;
        if (res[i - 1] < res[i]) {
            res[i] = res[i - 1] + 1;
        }
        if (res[j + 1] < res[j]) {
            res[j] = res[j + 1] + 1;
        }
        i++;
        j--;
    }
    return res;
};
// @lc code=end

