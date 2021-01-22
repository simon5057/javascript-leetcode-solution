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
  let last = Array.from({ length: 10 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    last[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 9; j > arr[i]; j--) {
      if (i < last[j]) {
        [arr[i], arr[last[j]]] = [arr[last[j]], arr[i]];
        return +arr.join('');
      }
    }
  }
  return num;
};
// @lc code=end
