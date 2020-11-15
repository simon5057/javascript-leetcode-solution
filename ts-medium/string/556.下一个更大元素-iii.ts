/*
 * @lc app=leetcode.cn id=556 lang=typescript
 *
 * [556] 下一个更大元素 III
 *
 * https://leetcode-cn.com/problems/next-greater-element-iii/description/
 *
 * algorithms
 * Medium (31.75%)
 * Likes:    107
 * Dislikes: 0
 * Total Accepted:    7.3K
 * Total Submissions: 22.9K
 * Testcase Example:  '12'
 *
 * 给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 12
 * 输出: 21
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: 21
 * 输出: -1
 * 
 * 
 */

// @lc code=start
function nextGreaterElement(n: number): number {
    let s = String(n);
    for (let i = s.length - 2; i >= 0; i--) {
        if (s[i] < s[i + 1]) {
            let next = +s[i];
            let nextIdx = i;
            for (let j = i + 1; j < s.length; j++) {
                if (s[i] >= s[j]) break;
                next = +s[j];
                nextIdx = j;
            }
            let res = s.substring(0, i) + s[nextIdx];
            let left = [...Array.from(s.substring(nextIdx + 1)), s[i], ...Array.from(s.substring(i + 1, nextIdx))];
            left.sort((a, b) => +a - +b);
            res += left.join('');
            return Number(res) >= 2 ** 31 ? -1 : Number(res);
        }
    }
    return -1;
};
// @lc code=end

