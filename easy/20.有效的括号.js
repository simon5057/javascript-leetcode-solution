/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    const stack = [];
    const map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');
    for (let i = 0; i < s.length; i++) {
        if (!map.get(s[i])) {
            stack.push(s[i]);
        } else {
            if (!stack.length) return false;
            if (map.get(s[i]) !== stack.pop()) return false;
        }
    }
    if (stack.length) return false;
    return true;
};

// @lc code=end