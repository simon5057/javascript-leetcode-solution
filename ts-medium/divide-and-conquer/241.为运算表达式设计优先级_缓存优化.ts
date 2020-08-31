/*
 * @lc app=leetcode.cn id=241 lang=typescript
 *
 * [241] 为运算表达式设计优先级
 *
 * https://leetcode-cn.com/problems/different-ways-to-add-parentheses/description/
 *
 * algorithms
 * Medium (72.02%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    14.5K
 * Total Submissions: 20.2K
 * Testcase Example:  '"2-1-1"'
 *
 * 给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及
 * * 。
 * 
 * 示例 1:
 * 
 * 输入: "2-1-1"
 * 输出: [0, 2]
 * 解释: 
 * ((2-1)-1) = 0 
 * (2-(1-1)) = 2
 * 
 * 示例 2:
 * 
 * 输入: "2*3-4*5"
 * 输出: [-34, -14, -10, -10, 10]
 * 解释: 
 * (2*(3-(4*5))) = -34 
 * ((2*3)-(4*5)) = -14 
 * ((2*(3-4))*5) = -10 
 * (2*((3-4)*5)) = -10 
 * (((2*3)-4)*5) = 10
 * 
 */

// @lc code=start
const set = new Set('+-*');
function diffWaysToCompute(input: string): number[] {
    const map = new Map<string, number[]>();
    return helper(input, map);
};
function helper(input: string, map: Map<string, number[]>): number[] {
    if (!input) return [];
    if (map.has(input)) return map.get(input)!;
    if (!Number.isNaN(Number(input))) return [+input];
    const res: number[] = [];
    for (let i = input.length - 1; i >= 0; i--) {
        if (set.has(input[i])) {
            let pre = helper(input.substring(0, i), map);
            let next = helper(input.substring(i + 1), map);
            getResult(input[i], pre, next, res);
        }
    }
    map.set(input, res);
    return res;
}
function getResult(opreator: string, pre: number[], next: number[], output: number[]) {
    if (opreator === '+') {
        for (const p of pre) {
            for (const n of next) {
                output.push(p + n);
            }
        }
    } else if (opreator === '-') {
        for (const p of pre) {
            for (const n of next) {
                output.push(p - n);
            }
        }
    } else if (opreator === '*') {
        for (const p of pre) {
            for (const n of next) {
                output.push(p * n);
            }
        }
    }
}
// @lc code=end

