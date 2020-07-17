/*
 * @lc app=leetcode.cn id=840 lang=typescript
 *
 * [840] 矩阵中的幻方
 *
 * https://leetcode-cn.com/problems/magic-squares-in-grid/description/
 *
 * algorithms
 * Easy (34.50%)
 * Likes:    36
 * Dislikes: 0
 * Total Accepted:    6.2K
 * Total Submissions: 17.9K
 * Testcase Example:  '[[4,3,8,4],[9,5,1,9],[2,7,6,2]]'
 *
 * 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
 * 
 * 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: [[4,3,8,4],
 * ⁠     [9,5,1,9],
 * ⁠     [2,7,6,2]]
 * 输出: 1
 * 解释: 
 * 下面的子矩阵是一个 3 x 3 的幻方：
 * 438
 * 951
 * 276
 * 
 * 而这一个不是：
 * 384
 * 519
 * 762
 * 
 * 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * 0 <= grid[i][j] <= 15
 * 
 * 
 */

// @lc code=start
function numMagicSquaresInside(grid: number[][]): number {
    let count: number = 0;
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j] !== 5) continue;
            if (magic(5, grid[i - 1][j - 1], grid[i][j - 1], grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1], grid[i - 1][j + 1], grid[i - 1][j])) {
                count++;
            }
        }
    }
    return count;
};
function magic(...arg: number[]): boolean {
    let [, a, b, c, d, e, f, g, h] = arg;
    const map = new Map();
    for (let i = 0; i < arg.length; i++) {
        map.set(arg[i], (map.get(arg[i]) || 0) + 1);
    }
    for (let j = 1; j <= 9; j++) {
        if (map.get(j) != 1) return false;
    }
    if (a + b + c === 15 && d + h === 10 && b + f === 10 && a + e === 10 && c + g === 10 && c + d + e === 15 && e + f + g === 15 && g + h + a === 15) {
        return true;
    }
    return false;
}
// @lc code=end

