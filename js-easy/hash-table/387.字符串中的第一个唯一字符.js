/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (45.20%)
 * Likes:    213
 * Dislikes: 0
 * Total Accepted:    79.1K
 * Total Submissions: 174.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = {};
    for (let x of s) {
        if (map[x]) {
            map[x]++;
        } else {
            map[x] = 1;
        }
    }
    for (let k in map) {
        if (map[k] === 1) {
            return s.indexOf(k);
        }
    }
    return -1;
};
// @lc code=end