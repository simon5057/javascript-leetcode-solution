/*
 * @lc app=leetcode.cn id=402 lang=typescript
 *
 * [402] 移掉K位数字
 *
 * https://leetcode-cn.com/problems/remove-k-digits/description/
 *
 * algorithms
 * Medium (29.93%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    26.9K
 * Total Submissions: 89.7K
 * Testcase Example:  '"1432219"\n3'
 *
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
 * 
 * 注意:
 * 
 * 
 * num 的长度小于 10002 且 ≥ k。
 * num 不会包含任何前导零。
 * 
 * 
 * 示例 1 :
 * 
 * 
 * 输入: num = "1432219", k = 3
 * 输出: "1219"
 * 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
 * 
 * 
 * 示例 2 :
 * 
 * 
 * 输入: num = "10200", k = 1
 * 输出: "200"
 * 解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
 * 
 * 
 * 示例 3 :
 * 
 * 
 * 输入: num = "10", k = 2
 * 输出: "0"
 * 解释: 从原数字移除所有的数字，剩余为空就是0。
 * 
 * 
 */

// @lc code=start
function removeKdigits(num: string, k: number): string {
    let last = 0;
    while (k > 0 && num) {
        let i = last;
        while (i < num.length - 1 && num[i] <= num[i + 1]) {
            i++;
        }
        if (num.length === 1) {
            num = '0';
            break;
        }
        if (i === num.length - 1) {
            num = num.substring(0, i);
            last = i - 1;
        } else {
            if (num[i] > num[i + 1]) {
                num = num.substring(0, i) + num.substring(i + 1);
            } else if (num[i + 2] > num[i + 1]) {
                num = num.substring(0, i + 2) + num.substring(i + 3);
            } else {
                num = num.substring(0, i + 1) + num.substring(i + 2);
            }
        }
        while (num[0] === '0') {
            num = num.substring(1);
        }
        k--;
    }
    return num || '0';
};
// @lc code=end

