/*
 * @lc app=leetcode.cn id=378 lang=typescript
 *
 * [378] 有序矩阵中第K小的元素
 *
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
 *
 * algorithms
 * Medium (62.79%)
 * Likes:    425
 * Dislikes: 0
 * Total Accepted:    53K
 * Total Submissions: 84.3K
 * Testcase Example:  '[[1,5,9],[10,11,13],[12,13,15]]\n8'
 *
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 * 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
 * 
 * 
 * 
 * 示例：
 * 
 * matrix = [
 * ⁠  [ 1,  5,  9],
 * ⁠  [10, 11, 13],
 * ⁠  [12, 13, 15]
 * ],
 * k = 8,
 * 
 * 返回 13。
 * 
 * 
 * 
 * 
 * 提示：
 * 你可以假设 k 的值永远是有效的，1 ≤ k ≤ n^2 。
 * 
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = ((left + right) >> 1);
        let count = check(matrix, mid, n);
        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
function check(matrix: number[][], mid: number, n: number): number {
    let i = n - 1;
    let j = 0;
    let count = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            count += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return count;
}
// @lc code=end

