/*
 * @lc app=leetcode.cn id=1013 lang=typescript
 *
 * [1013] 将数组分成和相等的三个部分
 *
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (40.40%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    36.1K
 * Total Submissions: 89.3K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 
 * 形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... +
 * A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 * 
 * 
 * 示例 2：
 * 
 * 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：[3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 50000
 * -10^4 <= A[i] <= 10^4
 * 
 * 
 */

// @lc code=start
function canThreePartsEqualSum(A: number[]): boolean {
    let sum = 0;
    for (const a of A) {
        sum += a;
    }
    sum /= 3;
    if (!Number.isInteger(sum)) return false;

    let x = 0, y = 0;
    let xi: number | null = null, yi: number | null = null;
    for (let i = 0; i < A.length; i++) {
        if (xi === null) {
            x += A[i];
            if (x === sum) xi = i;
        } else if (yi === null) {
            y += A[i];
            if (y === sum) {
                yi = i;
                break;
            }
        }
    }
    return xi !== null && yi !== null && yi < A.length - 1;
};
// @lc code=end

