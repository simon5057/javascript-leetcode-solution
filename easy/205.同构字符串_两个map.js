/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (47.26%)
 * Likes:    190
 * Dislikes: 0
 * Total Accepted:    36.5K
 * Total Submissions: 77.1K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 
 * 示例 1:
 * 
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    const map1 = new Array(128).fill(0);
    const map2 = new Array(128).fill(0);
    for (let i = 0; i < s.length; i++) {
        let c1 = s.charCodeAt(i);
        let c2 = t.charCodeAt(i);
        if (map1[c1] !== map2[c2]) {
            return false;
        } else {
            if (map1[c1] === 0) {
                map1[c1] = i + 1;
                map2[c2] = i + 1;
            }
        }
    }
    return true;
};
// @lc code=end