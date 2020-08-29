/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (42.81%)
 * Likes:    534
 * Dislikes: 0
 * Total Accepted:    69.2K
 * Total Submissions: 161.7K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 
 * 示例:
 * 
 * 输入: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 输出: 4
 * 
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
    const dp: number[][] = Array.from(matrix, row => Array.from(row, () => 0));
    let max = 0;
    const row = matrix.length;
    if (!row) return 0;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === '1') {
            dp[i][0] = 1;
            max = 1;
        }
    }
    for (let j = 1; j < col; j++) {
        if (matrix[0][j] === '1') {
            dp[0][j] = 1;
            max = 1;
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = 1;
                let pre = dp[i - 1][j - 1]
                if (!!pre && dp[i][j - 1] && dp[i - 1][j]) {
                    dp[i][j] = Math.min(pre, dp[i][j - 1], dp[i - 1][j]) + 1;
                }
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max ** 2;
};
// @lc code=end

