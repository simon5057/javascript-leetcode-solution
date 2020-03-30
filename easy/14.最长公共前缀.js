/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    let str = '';
    let curIndex = 0;
    let cur = strs[0][curIndex];
    while (true) {
        if (strs.every(s => s.length > curIndex && cur === s[curIndex])) {
            str += cur;
            cur = strs[0][++curIndex];
        } else {
            return str;
        }
    }
};

// @lc code=end