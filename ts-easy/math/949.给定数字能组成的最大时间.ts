/*
 * @lc app=leetcode.cn id=949 lang=typescript
 *
 * [949] 给定数字能组成的最大时间
 *
 * https://leetcode-cn.com/problems/largest-time-for-given-digits/description/
 *
 * algorithms
 * Easy (35.21%)
 * Likes:    45
 * Dislikes: 0
 * Total Accepted:    5.4K
 * Total Submissions: 15.5K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
 * 
 * 最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。
 * 
 * 以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,4]
 * 输出："23:41"
 * 
 * 
 * 示例 2：
 * 
 * 输入：[5,5,5,5]
 * 输出：""
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * A.length == 4
 * 0 <= A[i] <= 9
 * 
 * 
 */

// @lc code=start
function largestTimeFromDigits(A: number[]): string {
    let res: string = '';
    let max: number = -1;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (j !== i) {
                for (let k = 0; k < A.length; k++) {
                    if (k !== i && k !== j) {
                        let l = 6 - i - j - k;
                        let hours = A[i] * 10 + A[j];
                        let minutes = A[k] * 10 + A[l];
                        let cur = hours * 60 + minutes;
                        if (hours < 24 && minutes < 60 && max < cur) {
                            res = `${A[i]}${A[j]}:${A[k]}${A[l]}`;
                            max = cur;
                        }
                    }
                }
            }
        }
    }
    return res;
};
// @lc code=end

