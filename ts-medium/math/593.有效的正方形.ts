/*
 * @lc app=leetcode.cn id=593 lang=typescript
 *
 * [593] 有效的正方形
 *
 * https://leetcode-cn.com/problems/valid-square/description/
 *
 * algorithms
 * Medium (44.04%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    5.7K
 * Total Submissions: 12.8K
 * Testcase Example:  '[0,0]\n[1,1]\n[1,0]\n[0,1]'
 *
 * 给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
 * 
 * 一个点的坐标（x，y）由一个有两个整数的整数数组表示。
 * 
 * 示例:
 * 
 * 
 * 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * 输出: True
 * 
 * 
 * 
 * 
 * 注意:
 * 
 * 
 * 所有输入整数都在 [-10000，10000] 范围内。
 * 一个有效的正方形有四个等长的正长和四个等角（90度角）。
 * 输入点没有顺序。
 * 
 * 
 */

// @lc code=start
function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    const set = new Set();
    for (const p of [p1, p2, p3, p4]) {
        set.add(p.join());
    }
    if (set.size !== 4) return false;
    return check(p1, p2, p3, p4) || check(p1, p3, p2, p4) || check(p1, p2, p4, p3);
};
function dist(p1: number[], p2: number[]): number {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return (y2 - y1) ** 2 + (x2 - x1) ** 2;
}
function check(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    let l1 = dist(p1, p2);
    console.log(l1);
    if (l1 === 0) return false;
    let l2 = dist(p2, p3);
    if (l1 !== l2) return false;
    let l3 = dist(p3, p4);
    if (l2 !== l3) return false;
    let l4 = dist(p4, p1);
    if (l3 !== l4) return false;
    return dist(p1, p3) === dist(p2, p4);
}
// @lc code=end

