/*
 * @lc app=leetcode.cn id=223 lang=typescript
 *
 * [223] 矩形面积
 *
 * https://leetcode-cn.com/problems/rectangle-area/description/
 *
 * algorithms
 * Medium (43.67%)
 * Likes:    85
 * Dislikes: 0
 * Total Accepted:    11.7K
 * Total Submissions: 26.8K
 * Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
 *
 * 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
 * 
 * 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: -3, 0, 3, 4, 0, -1, 9, 2
 * 输出: 45
 * 
 * 说明: 假设矩形面积不会超出 int 的范围。
 * 
 */

// @lc code=start
function computeArea(A: number, B: number, C: number, D: number, E: number, F: number, G: number, H: number): number {
    let x1 = A;
    let x2 = C;
    let y1 = B;
    let y2 = D;

    let m1 = E;
    let m2 = G;
    let n1 = F;
    let n2 = H;
    let area = (x2 - x1) * (y2 - y1) + (m2 - m1) * (n2 - n1);

    let u1 = Math.max(x1, m1);
    let u2 = Math.min(x2, m2);
    let v1 = Math.max(y1, n1);
    let v2 = Math.min(y2, n2);
    if (u1 > u2 || v1 > v2) return area;
    return area - (u2 - u1) * (v2 - v1);
};
// @lc code=end

