/*
 * @lc app=leetcode.cn id=60 lang=typescript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (49.09%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    42.8K
 * Total Submissions: 87.1K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 说明：
 * 
 * 
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 4, k = 9
 * 输出: "2314"
 * 
 * 
 */

// @lc code=start
function getPermutation(n: number, k: number): string {
    const map = [];
    let total = 1;
    for (let i = 1; i <= n; i++) {
        map.push(i);
        total *= i;
    }
    let y = total / n;
    let res = '';
    while (map.length > 1) {
        let cur = Math.ceil(k / y);
        res += String(map[cur - 1]);
        map.splice(cur - 1, 1);
        k = k % y;
        if (k === 0) k = y;
        n--;
        y /= n;
    }
    return res + map[0];
};
// @lc code=end

