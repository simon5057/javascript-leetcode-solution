/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (53.69%)
 * Likes:    370
 * Dislikes: 0
 * Total Accepted:    33.5K
 * Total Submissions: 62.3K
 * Testcase Example:  '10'
 *
 * 编写一个程序，找出第 n 个丑数。
 * 
 * 丑数就是质因数只包含 2, 3, 5 的正整数。
 * 
 * 示例:
 * 
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 * 
 * 说明:  
 * 
 * 
 * 1 是丑数。
 * n 不超过1690。
 * 
 * 
 */

// @lc code=start
function nthUglyNumber(n: number): number {
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    const dp: number[] = [1];
    for (let i = 1; i < n; i++) {
        let n1 = dp[i2] * 2;
        let n2 = dp[i3] * 3;
        let n3 = dp[i5] * 5;
        dp[i] = Math.min(n1, n2, n3);
        if (n1 === dp[i]) i2++;
        if (n2 === dp[i]) i3++;
        if (n3 === dp[i]) i5++;
    }
    return dp[n - 1];
};
// @lc code=end

