/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode-cn.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (66.83%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 26.4K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 :
 * 
 * 输入:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 * 
 * 输出: 16
 * 
 * 解释: 它的周长是下面图片中的 16 个黄色的边：
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // 如果发现岛，则开始探索
            if (grid[i][j] === 1) {
                return dfs(grid, i, j);
            }
        }
    }
};

function dfs(grid, c, r) {
    // 如果越界，边长+1
    if (c < 0 || c >= grid.length || r < 0 || r >= grid[c].length) {
        return 1;
    }
    // 如果不是岛，边长+1
    if (grid[c][r] === 0) {
        return 1;
    }
    // 若已经探索，直接返回
    if (grid[c][r] !== 1) {
        return 0;
    }
    grid[c][r] = 2;
    return dfs(grid, c - 1, r) + dfs(grid, c, r - 1) + dfs(grid, c + 1, r) + dfs(grid, c, r + 1);
}
// @lc code=end