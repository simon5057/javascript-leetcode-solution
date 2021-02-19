/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Medium (40.10%)
 * Likes:    363
 * Dislikes: 0
 * Total Accepted:    62.8K
 * Total Submissions: 156.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 * 
 * 示例 3：
 * 
 * 
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * intervals[i].length == 2
 * 0 
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0 
 * 
 * 
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let [left, right] = newInterval;
  const res: number[][] = [];
  let palced = false;
  for (const [f, b] of intervals) {
    if (f > right) {
      if (!palced) {
        res.push([left, right]);
        palced = true;
      }
      res.push([f, b]);
    } else if (b < left) {
      res.push([f, b]);
    } else {
      left = Math.min(left, f);
      right = Math.max(right, b);
    }
  }
  if (!palced) {
    res.push([left, right]);
  }
  return res;
};
// @lc code=end

