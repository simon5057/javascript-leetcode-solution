/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (42.78%)
 * Likes:    549
 * Dislikes: 0
 * Total Accepted:    128.5K
 * Total Submissions: 300.3K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const res: number[][] = [];
    for (let i = 1; i < intervals.length; i++) {
        let x = intervals[i - 1];
        let y = intervals[i];
        if (x[1] >= y[0]) {
            y[0] = x[0];
            y[1] = Math.max(y[1], x[1]);
        } else {
            res.push(x);
        }
    }
    res.push(intervals[intervals.length - 1]);
    return res;
};
// @lc code=end

