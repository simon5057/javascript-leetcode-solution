/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (42.22%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    25.5K
 * Total Submissions: 60.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
 * 输出:  [1,2,4,7,5,3,6,8,9]
 * 
 * 解释:
 * 
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 给定矩阵中的元素总数不会超过 100000 。
 * 
 * 
 */

// @lc code=start
function findDiagonalOrder(matrix: number[][]): number[] {
    let m = matrix.length;
    if (!m) return [];
    let n = matrix[0].length;
    const direction = [[-1, 1], [1, -1]];
    function traverse(cur: number, i: number, j: number, output: number[]) {
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        output.push(matrix[i][j]);
        // 转向
        let a: number, b: number;
        if (cur === 0 && (i === 0 || j === n - 1)) {
            // 最顶 && 最右
            if (j === n - 1) {
                a = i + 1;
                b = j;
            } else {
                a = i;
                b = j + 1;
            }
            traverse(1, a!, b!, output);
            return;
        } else if (cur === 1 && (j === 0 || i === m - 1)) {
            // 最底 && 最左
            if (i === m - 1) {
                a = i;
                b = j + 1;
            } else {
                a = i + 1;
                b = j;
            }
            traverse(0, a!, b!, output);
            return;
        }
        let [xn, yn] = direction[cur];
        traverse(cur, i + xn, j + yn, output);
    }
    const res: number[] = [];
    traverse(0, 0, 0, res);
    return res;
};
// @lc code=end

