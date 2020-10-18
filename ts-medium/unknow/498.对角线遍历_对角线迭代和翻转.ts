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
    let i = 0;
    let j = 0;
    let k = 0;
    const res: number[] = [];
    while (j < n) {
        traverse(i, j, k);
        k++;
        j++;
    }
    j--;
    i++;
    while (i < m) {
        traverse(i, j, k);
        k++;
        i++;
    }
    return res;
    function traverse(i: number, j: number, k: number) {
        let x = i;
        let y = j;
        const cur: number[] = [];
        while (x < m && y >= 0) {
            cur.push(matrix[x][y]);
            x++;
            y--;
        }
        // 需要翻转
        if (k % 2 === 0) {
            res.push(...cur.reverse());
        } else {
            res.push(...cur);
        }
    }
};
// @lc code=end

