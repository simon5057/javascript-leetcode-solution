/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 *
 * https://leetcode-cn.com/problems/4sum-ii/description/
 *
 * algorithms
 * Medium (56.26%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 50.4K
 * Testcase Example:  '[1,2]\n[-2,-1]\n[-1,2]\n[0,2]'
 *
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] +
 * D[l] = 0。
 * 
 * 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1
 * 之间，最终结果不会超过 2^31 - 1 。
 * 
 * 例如:
 * 
 * 
 * 输入:
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个元组如下:
 * 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 * 
 * 
 */

// @lc code=start
function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
    const mapAB: Map<number, number> = new Map();
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j];
            if (!mapAB.has(sum)) {
                mapAB.set(sum, 1);
            } else {
                mapAB.set(sum, mapAB.get(sum)! + 1);
            }
        }
    }
    let res = 0;
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let sum = -(C[i] + D[j]);
            if (mapAB.has(sum)) res += mapAB.get(sum)!;
        }
    }
    return res;
};
// @lc code=end

