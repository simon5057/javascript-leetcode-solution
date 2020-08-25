/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (42.19%)
 * Likes:    356
 * Dislikes: 0
 * Total Accepted:    68K
 * Total Submissions: 161.1K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const row = board.length;
    if (!row) return;
    const col = board[0].length;
    const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const queue: [number, number][] = [];
    // 将位于边上的 O 点放入队列
    for (let i = 0; i < row; i++) {
        if (board[i][0] === 'O') queue.push([i, 0]);
        if (board[i][col - 1] === 'O') queue.push([i, col - 1]);
    }
    for (let j = 1; j < col - 1; j++) {
        if (board[0][j] === 'O') queue.push([0, j]);
        if (board[row - 1][j] === 'O') queue.push([row - 1, j]);
    }
    while (queue.length) {
        const [x, y] = queue.shift()!;
        board[x][y] = 'A';
        for (const [a, b] of direction) {
            let i = x + a;
            let j = y + b;
            if (i < 0 || j < 0 || i >= row || j >= col) continue;
            if (board[i][j] === 'O') queue.push([i, j]);
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
// @lc code=end

