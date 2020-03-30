/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let cur = x;
    let queue = [];
    while (cur) {
        queue.push(cur % 10);
        cur = Math.floor(cur / 10);
    }
    let rev = queue.reduce((n, p) => {
        return n * 10 + p;
    }, 0);
    return x === rev;
};
// @lc code=end