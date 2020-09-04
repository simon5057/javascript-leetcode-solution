/*
 * @lc app=leetcode.cn id=313 lang=typescript
 *
 * [313] 超级丑数
 *
 * https://leetcode-cn.com/problems/super-ugly-number/description/
 *
 * algorithms
 * Medium (63.50%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    10.4K
 * Total Submissions: 16.3K
 * Testcase Example:  '12\n[2,7,13,19]'
 *
 * 编写一段程序来查找第 n 个超级丑数。
 * 
 * 超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。
 * 
 * 示例:
 * 
 * 输入: n = 12, primes = [2,7,13,19]
 * 输出: 32 
 * 解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12
 * 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
 * 
 * 说明:
 * 
 * 
 * 1 是任何给定 primes 的超级丑数。
 * 给定 primes 中的数字以升序排列。
 * 0 < k ≤ 100, 0 < n ≤ 10^6, 0 < primes[i] < 1000 。
 * 第 n 个超级丑数确保在 32 位有符整数范围内。
 * 
 * 
 */

// @lc code=start
function nthSuperUglyNumber(n: number, primes: number[]): number {
    const counts = [1];
    const idxes: number[] = Array.from({ length: primes.length }, () => 0);
    while (counts.length < n) {
        let min = Infinity;
        let idx = 0;
        let last = counts[counts.length - 1];
        for (let i = 0; i < idxes.length; i++) {
            let cur = counts[idxes[i]] * primes[i];
            while (cur <= last) {
                idxes[i]++;
                cur = counts[idxes[i]] * primes[i];
            }
            if (cur < min) {
                min = cur;
                idx = i;
            }
        }
        counts.push(min);
        idxes[idx]++;
    }
    return counts[n - 1];
};
// @lc code=end

