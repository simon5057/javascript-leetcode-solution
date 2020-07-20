/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (55.61%)
 * Likes:    52
 * Dislikes: 0
 * Total Accepted:    14.6K
 * Total Submissions: 26.3K
 * Testcase Example:  '"ab-cd"'
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 示例 2：
 * 
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 示例 3：
 * 
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122 
 * S 中不包含 \ or "
 * 
 * 
 */

// @lc code=start
function reverseOnlyLetters(S: string): string {
    const arr = Array.from(S);
    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (/[a-zA-Z]/.test(arr[i])) {
            while (!/[a-zA-Z]/.test(S[j])) {
                j--;
            }
            arr[i] = S[j];
            j--;
        }
    }
    return arr.join('');
};
// @lc code=end

