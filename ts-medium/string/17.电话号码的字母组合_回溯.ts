/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (54.20%)
 * Likes:    819
 * Dislikes: 0
 * Total Accepted:    141.2K
 * Total Submissions: 260.5K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
type M1 = { [key: string]: string };
const map: M1 = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};
let output: string[];
function letterCombinations(digits: string): string[] {
    output = [];
    if (digits.length) {
        backtrack('', digits);
    }
    return output;
};
function backtrack(conbin: string, next_d: string) {
    if (next_d.length === 0) {
        output.push(conbin);
        return;
    }
    let cur = next_d.substring(0, 1);
    let m: string;
    for (m of map[cur]) {
        let next = next_d.substring(1);
        backtrack(conbin + m, next);
    }
}
// @lc code=end

