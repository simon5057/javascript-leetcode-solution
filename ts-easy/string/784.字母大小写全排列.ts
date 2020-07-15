/*
 * @lc app=leetcode.cn id=784 lang=typescript
 *
 * [784] 字母大小写全排列
 *
 * https://leetcode-cn.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (64.88%)
 * Likes:    186
 * Dislikes: 0
 * Total Accepted:    22.4K
 * Total Submissions: 34.5K
 * Testcase Example:  '"a1b2"'
 *
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 
 * 示例:
 * 输入: S = "a1b2"
 * 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入: S = "3z4"
 * 输出: ["3z4", "3Z4"]
 * 
 * 输入: S = "12345"
 * 输出: ["12345"]
 * 
 * 
 * 注意：
 * 
 * 
 * S 的长度不超过12。
 * S 仅由数字和字母组成。
 * 
 * 
 */

// @lc code=start
function letterCasePermutation(S: string): string[] {
    S = S.toLowerCase();
    let res: string[] = [];
    if (/[a-zA-Z]/.test(S[0])) {
        res = [S[0], S[0].toUpperCase()];
    } else {
        res = [S[0]];
    }
    for (let i = 1; i < S.length; i++) {
        let s = S[i];
        if (/[a-zA-Z]/.test(s)) {
            let r1 = res.map(v => v + s);
            let r2 = res.map(v => v + s.toUpperCase())
            res = r1.concat(r2);
        } else {
            res = res.map(v => v + s);
        }
    }
    return res;
};
// @lc code=end

