/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (77.87%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    42.6K
 * Total Submissions: 54.7K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    const res: number[][] = Array.from({ length: n }, () => []);
    const visited: boolean[][] = Array.from({ length: n }, () => Array.from({ length: 3 }, () => false));
    let i = 0;
    let j = 0;
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dIdx = 0;
    let total = n ** 2;
    let cur = 1;
    while (total--) {
        res[i][j] = cur++;
        visited[i][j] = true;
        let nexti = direction[dIdx][0] + i;
        let nextj = direction[dIdx][1] + j;
        if (nexti < 0 || nexti > n - 1 || nextj < 0 || nextj > n - 1 || visited[nexti][nextj]) {
            dIdx = (dIdx + 1) % 4;
        }
        i += direction[dIdx][0];
        j += direction[dIdx][1];
    }
    return res;
};
// @lc code=end

