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
    let top = 0;
    let right = n - 1;
    let bottom = n - 1;
    let left = 0;
    const res: number[][] = Array.from({ length: n }, () => []);
    let total = n ** 2;
    let cur = 1;
    while (total > 0) {
        for (let i = left; i <= right && total > 0; i++) {
            res[top][i] = cur++;
            total--;
        }
        top++;
        for (let i = top; i <= bottom && total > 0; i++) {
            res[i][right] = cur++;
            total--;
        }
        right--;
        for (let i = right; i >= left && total > 0; i--) {
            res[bottom][i] = cur++;
            total--;
        }
        bottom--;
        for (let i = bottom; i >= top && total > 0; i--) {
            res[i][left] = cur++;
            total--;
        }
        left++;
    }
    return res;
};
// @lc code=end

