/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let maxInt = Math.pow(2, 31) - 1;
    let minInt = Math.pow(-2, 31);
    if (dividend === 0) return 0;
    if (divisor === 1) {
        if (dividend > maxInt) return maxInt;
        if (dividend < minInt) return minInt;
        return dividend;
    }
    if (divisor === -1) {
        if (dividend > minInt) return -dividend;
        return maxInt;
    }

    let s = -1;
    if ((dividend >= 0 && divisor >= 0) || (dividend <= 0 && divisor <= 0)) {
        s = 1;
    }
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let res = (function div(dividend, divisor) {
        if (dividend < divisor) return 0;
        let m = 0;
        let a = dividend;
        let b = divisor;
        while (a >= (b + b)) {
            b = b + b;
            m++;
        }
        return Math.pow(2, m) + div(dividend - b, divisor);
    }(a, b))
    if (s > 0) return res;
    return -res;
};

// console.log(divide(2147483647, 2));
// console.log(divide(2147483641, 2));

// @lc code=end