/*
 * @lc app=leetcode.cn id=417 lang=typescript
 *
 * [417] 太平洋大西洋水流问题
 *
 * https://leetcode-cn.com/problems/pacific-atlantic-water-flow/description/
 *
 * algorithms
 * Medium (43.17%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    11.9K
 * Total Submissions: 27.6K
 * Testcase Example:  '[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]'
 *
 * 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。
 * 
 * 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。
 * 
 * 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输出坐标的顺序不重要
 * m 和 n 都小于150
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 
 * 给定下面的 5x5 矩阵:
 * 
 * ⁠ 太平洋 ~   ~   ~   ~   ~ 
 * ⁠      ~  1   2   2   3  (5) *
 * ⁠      ~  3   2   3  (4) (4) *
 * ⁠      ~  2   4  (5)  3   1  *
 * ⁠      ~ (6) (7)  1   4   5  *
 * ⁠      ~ (5)  1   1   2   4  *
 * ⁠         *   *   *   *   * 大西洋
 * 
 * 返回:
 * 
 * [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
 * 
 * 
 * 
 * 
 */

// @lc code=start
function pacificAtlantic(matrix: number[][]): number[][] {
    const m = matrix.length;
    if (!m) return [];
    const n = matrix[0].length;
    const pacific = Array.from(matrix, row => Array.from(row, () => 0));
    const atlantic = Array.from(matrix, row => Array.from(row, () => 0));
    const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    function dfs(x: number, y: number, ocean: number[][]) {
        ocean[x][y] = 1;
        for (const [i, j] of direction) {
            const a = x + i, b = y + j;
            if (a >= 0 && b >= 0 && a < m && b < n) {
                if (matrix[x][y] <= matrix[a][b] && ocean[a][b] !== 1) {
                    dfs(a, b, ocean);
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
        dfs(i, n - 1, atlantic);
    }
    for (let j = 0; j < n; j++) {
        if (j > 0) dfs(0, j, pacific);
        if (j < n - 1) dfs(m - 1, j, atlantic);
    }
    const res: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
        }
    }
    return res;
};
// @lc code=end

