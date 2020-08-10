/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (59.25%)
 * Likes:    190
 * Dislikes: 0
 * Total Accepted:    99K
 * Total Submissions: 165.4K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const map = new Array(26).fill(0);
    let aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        map[s[i].charCodeAt(0) - aCode]++;
    }
    for (let j = 0; j < s.length; j++) {
        map[t[j].charCodeAt(0) - aCode]--;
        if (map[t[j].charCodeAt(0) - aCode] < 0) {
            return false;
        }
    }
    return true;
};
// @lc code=end