/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (45.06%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    42.3K
 * Total Submissions: 93.8K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 
 * 两个相邻元素间的距离为 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[0,0,0]]
 * 
 * 输出：
 * [[0,0,0],
 * [0,1,0],
 * [0,0,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,1,1]]
 * 
 * 输出：
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 * 
 * 
 */

// @lc code=start
function updateMatrix(matrix: number[][]): number[][] {
    const visited: boolean[][] = Array.from(matrix, row => Array.from(row, () => false));
    const direction: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const m = matrix.length;
    const n = matrix[0].length;
    const queue: number[][] = [];
    const res: number[][] = Array.from(matrix, row => Array.from(row, () => 0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i, j]);
                visited[i][j] = true;
            }
        }
    }
    while (queue.length) {
        let [x, y] = queue.shift()!;
        for (const [a, b] of direction) {
            let nx = x + a;
            let ny = y + b;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                res[nx][ny] = res[x][y] + 1;
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
    return res;
};
// @lc code=end

