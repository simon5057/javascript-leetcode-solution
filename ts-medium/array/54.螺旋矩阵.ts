/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (40.89%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    73.7K
 * Total Submissions: 180.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = [];
    if (!matrix.length) return res;
    const visited: boolean[][] = Array.from({ length: matrix.length }, () => []);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dIdx = 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let nums = m * n;
    let i = 0;
    let j = 0;
    for (let a = 0; a < nums; a++) {
        res.push(matrix[i][j]);
        visited[i][j] = true;
        let nexti = directions[dIdx][0] + i;
        let nextj = directions[dIdx][1] + j;
        if (nexti < 0 || nexti >= m || nextj < 0 || nextj >= n || visited[nexti][nextj]) {
            dIdx = (dIdx + 1) % 4;
        }
        i += directions[dIdx][0];
        j += directions[dIdx][1];
    }
    return res;
};
// @lc code=end

