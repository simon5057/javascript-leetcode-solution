/*
 * @lc app=leetcode.cn id=423 lang=typescript
 *
 * [423] 从英文中重建数字
 *
 * https://leetcode-cn.com/problems/reconstruct-original-digits-from-english/description/
 *
 * algorithms
 * Medium (54.03%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 9K
 * Testcase Example:  '"owoztneoer"'
 *
 * 给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字。
 * 
 * 注意:
 * 
 * 
 * 输入只包含小写英文字母。
 * 输入保证合法并可以转换为原始的数字，这意味着像 "abc" 或 "zerone" 的输入是不允许的。
 * 输入字符串的长度小于 50,000。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: "owoztneoer"
 * 
 * 输出: "012" (zeroonetwo)
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "fviefuro"
 * 
 * 输出: "45" (fourfive)
 * 
 * 
 */

// @lc code=start
// const map: string[] = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine'
// ];
function originalDigits(s: string): string {
    const counts: { [key: string]: number } = {};
    for (const x of s) {
        if (!counts[x]) counts[x] = 0;
        counts[x]++;
    }
    const list: number[] = [];
    list[0] = counts['z'] || 0;
    list[2] = counts['w'] || 0;
    list[4] = counts['u'] || 0;
    list[6] = counts['x'] || 0;
    list[8] = counts['g'] || 0;
    list[1] = (counts['o'] || 0) - list[0] - list[2] - list[4];
    list[3] = (counts['h'] || 0) - list[8];
    list[5] = (counts['f'] || 0) - list[4];
    list[7] = (counts['s'] || 0) - list[6];
    list[9] = (counts['i'] || 0) - list[5] - list[6] - list[8];
    let res = '';
    for (let i = 0; i < list.length; i++) {
        res += String(i).repeat(list[i]);
    }
    return res;
};
// @lc code=end

