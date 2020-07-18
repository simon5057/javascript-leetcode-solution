/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 *
 * https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/description/
 *
 * algorithms
 * Easy (70.87%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    26.7K
 * Total Submissions: 37.6K
 * Testcase Example:  '[0,1,0]'
 *
 * 我们把符合下列属性的数组 A 称作山脉：
 * 
 * 
 * A.length >= 3
 * 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... >
 * A[A.length - 1]
 * 
 * 
 * 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... >
 * A[A.length - 1] 的 i 的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[0,1,0]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 输入：[0,2,1,0]
 * 输出：1
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 10000
 * 0 <= A[i] <= 10^6
 * A 是如上定义的山脉
 * 
 * 
 * 
 * 
 */

// @lc code=start
function peakIndexInMountainArray(A: number[]): number {
    let i: number = 0;
    let j: number = A.length - 1;
    while (i <= j) {
        let m: number = (i + j) >> 1;
        if (A[m] > A[m - 1] && A[m] > A[m + 1]) return m;
        if (A[m] > A[m - 1]) {
            i = m;
        } else {
            j = m;
        }
    }
    return i;
};
// @lc code=end

