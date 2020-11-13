/*
 * @lc app=leetcode.cn id=539 lang=typescript
 *
 * [539] 最小时间差
 *
 * https://leetcode-cn.com/problems/minimum-time-difference/description/
 *
 * algorithms
 * Medium (56.93%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 16K
 * Testcase Example:  '["23:59","00:00"]'
 *
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：timePoints = ["23:59","00:00"]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：timePoints = ["00:00","23:59","00:00"]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * timePoints[i] 格式为 "HH:MM"
 * 
 * 
 */

// @lc code=start
function findMinDifference(timePoints: string[]): number {
  const times = timePoints.map(t => {
    let [h, m] = t.split(':');
    return +h * 60 + +m;
  }).sort((a, b) => a - b);
  let diff = 1459;
  for (let i = 1; i < times.length; i++) {
    if (i === times.length - 1) {
      diff = Math.min(diff, times[i] - times[i - 1], 1440 - times[i] + times[0]);
    } else {
      diff = Math.min(diff, times[i] - times[i - 1]);
    }
  }
  return diff;
};
// @lc code=end

