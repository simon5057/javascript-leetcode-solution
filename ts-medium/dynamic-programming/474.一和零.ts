/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 *
 * https://leetcode-cn.com/problems/ones-and-zeroes/description/
 *
 * algorithms
 * Medium (55.23%)
 * Likes:    236
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 34.4K
 * Testcase Example:  '["10","0001","111001","1","0"]\n5\n3'
 *
 * 在计算机界中，我们总是追求用有限的资源获取最大的收益。
 * 
 * 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
 * 
 * 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
 * 输出: 4
 * 解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
 * 
 * 
 * 示例 2:
 * 
 * 输入: strs = ["10", "0", "1"], m = 1, n = 1
 * 输出: 2
 * 解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 600
 * 1 <= strs[i].length <= 100
 * strs[i] 仅由 '0' 和 '1' 组成
 * 1 <= m, n <= 100
 * 
 * 
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m + 1 },
        () => Array.from({ length: n + 1 }, () => 0));
    for (const s of strs) {
        let x = 0;
        let y: number;
        for (const ch of s) {
            if (ch === '0') x++;
        }
        y = s.length - x;
        for (let i = m; i >= x; i--) {
            for (let j = n; j >= y; j--) {
                dp[i][j] = Math.max(1 + dp[i - x][j - y], dp[i][j]);
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

