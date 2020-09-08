/*
 * @lc app=leetcode.cn id=372 lang=typescript
 *
 * [372] 超级次方
 *
 * https://leetcode-cn.com/problems/super-pow/description/
 *
 * algorithms
 * Medium (44.06%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 15.5K
 * Testcase Example:  '2\n[3]'
 *
 * 你的任务是计算 a^b 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
 * 
 * 示例 1:
 * 
 * 输入: a = 2, b = [3]
 * 输出: 8
 * 
 * 
 * 示例 2:
 * 
 * 输入: a = 2, b = [1,0]
 * 输出: 1024
 * 
 */

// @lc code=start
function superPow(a: number, b: number[]): number {
    if (!b.length || (b.length === 1 && b[0] === 0)) return 1;
    let x = b.pop();
    let p1 = getMod(a, x!);
    let p2 = getMod(superPow(a, b), 10);
    return (p1 * p2) % 1337;
};
function getMod(a: number, k: number): number {
    a %= 1337;
    let res = 1;
    for (let i = 1; i <= k; i++) {
        res *= a;
        res %= 1337;
    }
    return res;
}
// @lc code=end

