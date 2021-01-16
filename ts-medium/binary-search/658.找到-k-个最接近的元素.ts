/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 *
 * https://leetcode-cn.com/problems/find-k-closest-elements/description/
 *
 * algorithms
 * Medium (44.34%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 38.2K
 * Testcase Example:  '[1,2,3,4,5]\n4\n3'
 *
 * 给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 * 
 * 整数 a 比整数 b 更接近 x 需要满足：
 * 
 * 
 * |a - x| < |b - x| 或者
 * |a - x| == |b - x| 且 a < b
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：arr = [1,2,3,4,5], k = 4, x = 3
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：arr = [1,2,3,4,5], k = 4, x = -1
 * 输出：[1,2,3,4]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 数组里的每个元素与 x 的绝对值不超过 10^4
 * 
 * 
 */

// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (k === arr.length) return arr;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    if (arr[m] == x) {
      l = m;
      break;
    } else if (arr[m] < x) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (l > 0 && Math.abs(arr[l] - x) >= Math.abs(arr[l - 1] - x)) l--;
  r = l;
  const result: number[] = [arr[l]];
  l--;
  r++;
  k--;
  while (k > 0) {
    if (r < arr.length && (l < 0 || Math.abs(arr[l] - x) > Math.abs(arr[r] - x))) {
      result.push(arr[r]);
      r++;
    } else {
      result.unshift(arr[l]);
      l--;
    }
    k--;
  }
  return result;
};
// @lc code=end

