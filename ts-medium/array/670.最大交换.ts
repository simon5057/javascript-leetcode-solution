/*
 * @lc app=leetcode.cn id=670 lang=typescript
 *
 * [670] 最大交换
 *
 * https://leetcode-cn.com/problems/maximum-swap/description/
 *
 * algorithms
 * Medium (42.63%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 26.3K
 * Testcase Example:  '2736'
 *
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 * 
 * 示例 1 :
 * 
 * 
 * 输入: 2736
 * 输出: 7236
 * 解释: 交换数字2和数字7。
 * 
 * 
 * 示例 2 :
 * 
 * 
 * 输入: 9973
 * 输出: 9973
 * 解释: 不需要交换。
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数字的范围是 [0, 10^8]
 * 
 * 
 */

// @lc code=start
function maximumSwap(num: number): number {
  const arr: number[] = [];
  let n = num;
  while (n) {
    arr.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  function findLeft(idx: number): number {
    if (arr.length <= idx) return arr.length;
    for (let i = idx + 1; i < arr.length; i++) {
      if (arr[i] > arr[idx]) return idx;
    }
    return findLeft(idx + 1);
  }
  let left = findLeft(0);
  if (left === arr.length) return num;
  let right = left;

  for (let i = left + 1; i < arr.length; i++) {
    if (arr[right] <= arr[i]) right = i;
  }
  [arr[left], arr[right]] = [arr[right], arr[left]];
  return +arr.join('');
};
// @lc code=end
