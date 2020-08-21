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
    const visited: boolean[][] = Array.from(board, row => Array.from(row, () => false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O' && !visited[i][j]) {
                const area: [number, number][] = [];
                if (dfs(i, j, area)) {
                    area.forEach(x => board[x[0]][x[1]] = 'X')
                }
            }
        }
    }
    function dfs(i: number, j: number, area: [number, number][]): boolean {
        visited[i][j] = true;
        let flag = true;
        if (i === 0 || i === row - 1 || j === 0 || j === col - 1) flag = false;
        let t = true, r = true, d = true, l = true;
        if (board[i - 1] && board[i - 1][j] === 'O' && !visited[i - 1][j]) t = dfs(i - 1, j, area);
        if (board[i][j + 1] === 'O' && !visited[i][j + 1]) r = dfs(i, j + 1, area);
        if (board[i + 1] && board[i + 1][j] === 'O' && !visited[i + 1][j]) d = dfs(i + 1, j, area);
        if (board[i][j - 1] === 'O' && !visited[i][j - 1]) l = dfs(i, j - 1, area);
        area.push([i, j]);
        return !flag ? flag : (t && r && d && l);
    }
};
// @lc code=end

