/*
 * @lc app=leetcode.cn id=812 lang=typescript
 *
 * [812] 最大三角形面积
 *
 * https://leetcode-cn.com/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (60.54%)
 * Likes:    58
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 10.9K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
 * 
 * 
 * 示例:
 * 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * 输出: 2
 * 解释: 
 * 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。
 * 
 * 
 * 
 * 
 * 注意: 
 * 
 * 
 * 3 <= points.length <= 50.
 * 不存在重复的点。
 * -50 <= points[i][j] <= 50.
 * 结果误差值在 10^-6 以内都认为是正确答案。
 * 
 * 
 */

// @lc code=start
function largestTriangleArea(points: number[][]): number {
    let len = points.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                max = Math.max(max, area(points[i], points[j], points[k]));
            }
        }
    }
    return max;
};

function area(p: number[], q: number[], r: number[]): number {
    return 0.5 * Math.abs(p[0] * q[1] + q[0] * r[1] + r[0] * p[1] - p[1] * q[0] - q[1] * r[0] - r[1] * p[0]);
}
// @lc code=end

