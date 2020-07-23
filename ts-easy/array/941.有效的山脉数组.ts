/*
 * @lc app=leetcode.cn id=941 lang=typescript
 *
 * [941] 有效的山脉数组
 *
 * https://leetcode-cn.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (35.74%)
 * Likes:    48
 * Dislikes: 0
 * Total Accepted:    11.3K
 * Total Submissions: 31.7K
 * Testcase Example:  '[2,1]'
 *
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 * 
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 * 
 * 
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 * 
 * A[0] < A[1] < ... A[i-1] < A[i] 
 * A[i] > A[i+1] > ... > A[A.length - 1]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[2,1]
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 输入：[3,5,5]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：[0,3,2,1]
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
function validMountainArray(A: number[]): boolean {
    let i = 0;
    let len = A.length;
    while (i < len - 1 && A[i] < A[i + 1]) {
        i++;
    }
    // 如果第一项不是递增，或者是单调递增
    if (i === 0 || i === len - 1) return false;

    while (i < len - 1 && A[i] > A[i + 1]) {
        i++;
    }

    return i === len - 1;
};
// @lc code=end

