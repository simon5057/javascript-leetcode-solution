/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 *
 * https://leetcode-cn.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (37.17%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    22.8K
 * Total Submissions: 61.2K
 * Testcase Example:  '"3+2*2"'
 *
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 
 * 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 * 
 * 示例 1:
 * 
 * 输入: "3+2*2"
 * 输出: 7
 * 
 * 
 * 示例 2:
 * 
 * 输入: " 3/2 "
 * 输出: 1
 * 
 * 示例 3:
 * 
 * 输入: " 3+5 / 2 "
 * 输出: 5
 * 
 * 
 * 说明：
 * 
 * 
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 * 
 * 
 */

// @lc code=start
function calculate(s: string): number {
    const set = new Set('+-*/');
    const stack: number[] = [];
    let sign = '+';
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (/\d/.test(s[i])) num = num * 10 + +s[i];
        if (set.has(s[i]) || i === s.length - 1) {
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop()! * num);
                    break;
                case '/':
                    stack.push((stack.pop()! / num) >> 0);
                    break;
            }
            sign = s[i];
            num = 0;
        }
    }
    let sum = 0;
    for (const n of stack) {
        sum += n;
    }
    return sum;
};
// @lc code=end

