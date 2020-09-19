/*
 * @lc app=leetcode.cn id=395 lang=typescript
 *
 * [395] 至少有K个重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (44.20%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 31K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s = "aaabb", k = 3
 * 
 * 输出:
 * 3
 * 
 * 最长子串为 "aaa" ，其中 'a' 重复了 3 次。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s = "ababbc", k = 2
 * 
 * 输出:
 * 5
 * 
 * 最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 * 
 * 
 */

// @lc code=start
function longestSubstring(s: string, k: number): number {
    if (!s) return 0;
    const set = new Set(s);
    let n = s.length;
    let wordLen = set.size;
    let max = 0;
    for (let i = 1; i <= wordLen; i++) {
        max = Math.max(calc(i), max);
    }
    return max;
    function calc(num: number) {
        let l = 0;
        let cur = 0; // 不同字符的个数
        let beK = 0; // 字符出现次数不小于 k 的字符个数
        const c: { [key: string]: number } = {};
        let res = 0;
        for (let r = 0; r < n; r++) {
            const ch = s[r];
            if (!c[ch]) c[ch] = 0;
            c[ch]++;
            if (c[ch] === 1) cur++;
            if (c[ch] === k) beK++;
            while (cur > num) {
                if (c[s[l]] === 1) cur--;
                if (c[s[l]] === k) beK--;
                c[s[l]]--;
                l++;
            }
            if (beK === num) res = Math.max(res, r - l + 1);
        }
        return res;
    }
};
// @lc code=end

