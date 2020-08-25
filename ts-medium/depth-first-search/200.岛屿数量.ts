/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (50.10%)
 * Likes:    728
 * Dislikes: 0
 * Total Accepted:    147K
 * Total Submissions: 293.3K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ['1','1','1','1','0'],
 * ['1','1','0','1','0'],
 * ['1','1','0','0','0'],
 * ['0','0','0','0','0']
 * ]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ['1','1','0','0','0'],
 * ['1','1','0','0','0'],
 * ['0','0','1','0','0'],
 * ['0','0','0','1','1']
 * ]
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    const visited: boolean[][] = Array.from(grid, row => Array.from(row, () => false));
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                count++;
                dfs(grid, i, j, visited);
            }
        }
    }
    return count;
};
function dfs(grid: string[][], i: number, j: number, visited: boolean[][]) {
    visited[i][j] = true;
    if (grid[i][j] === '0') return;
    const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    for (const [x, y] of direction) {
        let a = x + i;
        let b = y + j;
        if (a >= 0 && b >= 0 && a < grid.length && b < grid[0].length && !visited[a][b]) {
            dfs(grid, a, b, visited);
        }
    }
}
// @lc code=end

