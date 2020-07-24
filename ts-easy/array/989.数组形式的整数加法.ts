/*
 * @lc app=leetcode.cn id=989 lang=typescript
 *
 * [989] 数组形式的整数加法
 *
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (44.13%)
 * Likes:    64
 * Dislikes: 0
 * Total Accepted:    14.3K
 * Total Submissions: 32.3K
 * Testcase Example:  '[1,2,0,0]\n34'
 *
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1,2,0,0], K = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [2,7,4], K = 181
 * 输出：[4,5,5]
 * 解释：274 + 181 = 455
 * 
 * 
 * 示例 3：
 * 
 * 输入：A = [2,1,5], K = 806
 * 输出：[1,0,2,1]
 * 解释：215 + 806 = 1021
 * 
 * 
 * 示例 4：
 * 
 * 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * 输出：[1,0,0,0,0,0,0,0,0,0,0]
 * 解释：9999999999 + 1 = 10000000000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 9
 * 0 <= K <= 10000
 * 如果 A.length > 1，那么 A[0] != 0
 * 
 * 
 */

// @lc code=start
function addToArrayForm(A: number[], K: number): number[] {
    const res: number[] = [];
    let n = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        let sum: number;
        if (K !== 0) {
            let cur = K % 10;
            K = (K / 10) >> 0;
            sum = cur + n + A[i];
        } else {
            sum = n + A[i];
        }
        n = (sum / 10) >> 0;
        res.unshift(sum % 10);
    }
    while (K !== 0) {
        let cur = K % 10;
        let sum = cur + n;
        n = (sum / 10) >> 0;
        res.unshift(sum % 10);
        K = (K / 10) >> 0;
    }
    if (n !== 0) res.unshift(n);
    return res;
};
// @lc code=end

