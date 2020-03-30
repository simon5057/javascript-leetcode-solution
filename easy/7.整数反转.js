/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    let max = 2 ** 31 - 1;
    let symbol = x < 0;
    x = Math.abs(x);
    while (x != 0) {
        let pop = x % 10;
        x = Math.floor(x / 10);
        rev = rev * 10 + pop;
        if (rev > max || (symbol && rev > max + 1)) return 0;
    }
    return symbol ? -rev : rev;
};

// @lc code=end