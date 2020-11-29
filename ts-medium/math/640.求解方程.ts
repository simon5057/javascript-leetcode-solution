/*
 * @lc app=leetcode.cn id=640 lang=typescript
 *
 * [640] 求解方程
 *
 * https://leetcode-cn.com/problems/solve-the-equation/description/
 *
 * algorithms
 * Medium (41.36%)
 * Likes:    56
 * Dislikes: 0
 * Total Accepted:    7.8K
 * Total Submissions: 18.9K
 * Testcase Example:  '"x+5-3+x=6+x-2"'
 *
 * 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
 * 
 * 如果方程没有解，请返回“No solution”。
 * 
 * 如果方程有无限解，则返回“Infinite solutions”。
 * 
 * 如果方程中只有一个解，要保证返回值 x 是一个整数。
 * 
 * 示例 1：
 * 
 * 输入: "x+5-3+x=6+x-2"
 * 输出: "x=2"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "x=x"
 * 输出: "Infinite solutions"
 * 
 * 
 * 示例 3:
 * 
 * 输入: "2x=x"
 * 输出: "x=0"
 * 
 * 
 * 示例 4:
 * 
 * 输入: "2x+3x-6x=x+2"
 * 输出: "x=-1"
 * 
 * 
 * 示例 5:
 * 
 * 输入: "x=x+2"
 * 输出: "No solution"
 * 
 * 
 */

// @lc code=start
function solveEquation(equation: string): string {
    const [l, r] = equation.split('=');
    let lhs = 0, rhs = 0;
    for (const x of breakIt(l)) {
        if (x.includes('x')) {
            lhs += coeff(x);
        } else {
            rhs -= Number.parseInt(x);
        }
    }
    for (const x of breakIt(r)) {
        if (x.includes('x')) {
            lhs -= coeff(x);
        } else {
            rhs += Number.parseInt(x);
        }
    }
    if (lhs === 0) {
        if (rhs === 0) return 'Infinite solutions';
        return 'No solution';
    }
    return `x=${rhs / lhs}`;
};
function coeff(s: string): number {
    if (/[0-9]/g.test(s)) return Number.parseInt(s.replace('x', ''));
    return Number.parseInt(s.replace('x', '1'));
}
function breakIt(s: string): string[] {
    const res: string[] = [];
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '-' || s[i] === '+') {
            if (temp.length > 0) res.push(temp);
            temp = s[i];
        } else {
            temp += s[i];
        }
    }
    res.push(temp);
    return res;
}
// @lc code=end

