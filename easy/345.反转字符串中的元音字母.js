/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (49.57%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    34.7K
 * Total Submissions: 69.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0;
    let right = s.length - 1;
    s = s.split('');
    while (left <= right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        } else if (vowels.includes(s[left])) {
            right--;
        } else if (vowels.includes(s[right])) {
            left++;
        } else {
            left++;
            right--;
        }
    }
    return s.join('');
};
// @lc code=end