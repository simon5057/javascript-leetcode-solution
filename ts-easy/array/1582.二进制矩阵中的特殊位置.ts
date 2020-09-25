/*
 * @lc app=leetcode.cn id=1582 lang=typescript
 *
 * [1582] 二进制矩阵中的特殊位置
 *
 * https://leetcode-cn.com/problems/special-positions-in-a-binary-matrix/description/
 *
 * algorithms
 * Easy (66.36%)
 * Likes:    4
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 7.4K
 * Testcase Example:  '[[1,0,0],[0,0,1],[1,0,0]]'
 *
 * 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目 。
 * 
 * 特殊位置 定义：如果 mat[i][j] == 1 并且第 i 行和第 j 列中的所有其他元素均为 0（行和列的下标均 从 0 开始 ），则位置 (i,
 * j) 被称为特殊位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：mat = [[1,0,0],
 * [0,0,1],
 * [1,0,0]]
 * 输出：1
 * 解释：(1,2) 是一个特殊位置，因为 mat[1][2] == 1 且所处的行和列上所有其他元素都是 0
 * 
 * 
 * 示例 2：
 * 
 * 输入：mat = [[1,0,0],
 * [0,1,0],
 * [0,0,1]]
 * 输出：3
 * 解释：(0,0), (1,1) 和 (2,2) 都是特殊位置
 * 
 * 
 * 示例 3：
 * 
 * 输入：mat = [[0,0,0,1],
 * [1,0,0,0],
 * [0,1,1,0],
 * [0,0,0,0]]
 * 输出：2
 * 
 * 
 * 示例 4：
 * 
 * 输入：mat = [[0,0,0,0,0],
 * [1,0,0,0,0],
 * [0,1,0,0,0],
 * [0,0,1,0,0],
 * [0,0,0,1,1]]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * rows == mat.length
 * cols == mat[i].length
 * 1 <= rows, cols <= 100
 * mat[i][j] 是 0 或 1
 * 
 * 
 */

// @lc code=start
function numSpecial(mat: number[][]): number {
    const visited: boolean[][] = Array.from(mat, row => Array.from(row, () => false));
    let row = mat.length;
    let col = mat[0].length;
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && !visited[i][j]) {
                if (check(i, j, mat, visited)) {
                    count++;
                }
            }
        }
    }
    return count;
    function check(i: number, j: number, mat: number[][], visited: boolean[][]) {
        let flag1 = true;
        for (let m = 0; m < row; m++) {
            if (m !== i && mat[m][j] === 1) {
                flag1 = false;
                visited[m][j] = true;
            }
        }
        let flag2 = true;
        for (let n = 0; n < col; n++) {
            if (n !== j && mat[i][n] === 1) {
                flag2 = false;
                visited[i][n] = true;
            }
        }
        return flag1 && flag2;
    }
};
// @lc code=end

