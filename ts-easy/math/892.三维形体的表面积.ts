/*
 * @lc app=leetcode.cn id=892 lang=typescript
 *
 * [892] 三维形体的表面积
 *
 * https://leetcode-cn.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (64.16%)
 * Likes:    122
 * Dislikes: 0
 * Total Accepted:    28.6K
 * Total Submissions: 44.5K
 * Testcase Example:  '[[2]]'
 *
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
 * 
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
 * 
 * 请你返回最终形体的表面积。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[2]]
 * 输出：10
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[1,2],[3,4]]
 * 输出：34
 * 
 * 
 * 示例 3：
 * 
 * 输入：[[1,0],[0,2]]
 * 输出：16
 * 
 * 
 * 示例 4：
 * 
 * 输入：[[1,1,1],[1,0,1],[1,1,1]]
 * 输出：32
 * 
 * 
 * 示例 5：
 * 
 * 输入：[[2,2,2],[2,1,2],[2,2,2]]
 * 输出：46
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 50
 * 0 <= grid[i][j] <= 50
 * 
 * 
 */

// @lc code=start
function surfaceArea(grid: number[][]): number {
    let res: number = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let p = grid[i][j];
            if (p !== 0) {
                res += (p * 4 + 2) - getOverlapping(i, j);
            }
        }
    }
    function getOverlapping(i: number, j: number): number {
        let p = grid[i][j];
        let overlap: number = 0;
        if (i > 0) overlap += Math.min(p, grid[i - 1][j]);
        if (i < grid.length - 1) overlap += Math.min(p, grid[i + 1][j]);
        if (j > 0) overlap += Math.min(p, grid[i][j - 1]);
        if (j < grid[i].length - 1) overlap += Math.min(p, grid[i][j + 1]);
        return overlap;
    }
    return res;
};
// @lc code=end

