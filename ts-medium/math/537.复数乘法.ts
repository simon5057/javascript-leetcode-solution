/*
 * @lc app=leetcode.cn id=537 lang=typescript
 *
 * [537] 复数乘法
 *
 * https://leetcode-cn.com/problems/complex-number-multiplication/description/
 *
 * algorithms
 * Medium (70.14%)
 * Likes:    47
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 11.6K
 * Testcase Example:  '"1+1i"\n"1+1i"'
 *
 * 给定两个表示复数的字符串。
 * 
 * 返回表示它们乘积的字符串。注意，根据定义 i^2 = -1 。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "1+1i", "1+1i"
 * 输出: "0+2i"
 * 解释: (1 + i) * (1 + i) = 1 + i^2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "1+-1i", "1+-1i"
 * 输出: "0+-2i"
 * 解释: (1 - i) * (1 - i) = 1 + i^2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。 
 * 
 * 
 * 注意:
 * 
 * 
 * 输入字符串不包含额外的空格。
 * 输入字符串将以 a+bi 的形式给出，其中整数 a 和 b 的范围均在 [-100, 100] 之间。输出也应当符合这种形式。
 * 
 * 
 */

// @lc code=start
function complexNumberMultiply(a: string, b: string): string {
  let [x1, y1] = a.split('+');
  let [x2, y2] = b.split('+');

  let [a1, a2] = [+x1, +x2];
  let [b1, b2] = [Number.parseInt(y1), Number.parseInt(y2)];
  let m = a1 * a2 + b1 * b2 * (-1);
  let n = a1 * b2 + a2 * b1;
  return `${m}+${n}i`;
};
// @lc code=end

