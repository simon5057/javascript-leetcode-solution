/*
 * @lc app=leetcode.cn id=1394 lang=typescript
 *
 * [1394] 找出数组中的幸运数
 *
 * https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/description/
 *
 * algorithms
 * Easy (66.99%)
 * Likes:    10
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 13.6K
 * Testcase Example:  '[2,2,3,4]'
 *
 * 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。
 * 
 * 给你一个整数数组 arr，请你从中找出并返回一个幸运数。
 * 
 * 
 * 如果数组中存在多个幸运数，只需返回 最大 的那个。
 * 如果数组中不含幸运数，则返回 -1 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：arr = [2,2,3,4]
 * 输出：2
 * 解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：arr = [1,2,2,3,3,3]
 * 输出：3
 * 解释：1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。
 * 
 * 
 * 示例 3：
 * 
 * 输入：arr = [2,2,2,3,3]
 * 输出：-1
 * 解释：数组中不存在幸运数。
 * 
 * 
 * 示例 4：
 * 
 * 输入：arr = [5]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 输入：arr = [7,7,7,7,7,7,7]
 * 输出：7
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 500
 * 1 <= arr[i] <= 500
 * 
 * 
 */

// @lc code=start
function findLucky(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let idx: number = arr.length - 1;
    let pre: number = arr[idx];
    let i = idx;
    while (i >= 0) {
        if (pre !== arr[i]) {
            if (idx - i === pre) return pre;
            pre = arr[i];
            idx = i;
            if (i === 0 && pre === 1) return pre;
        } else if (i == 0) {
            if (idx - i + 1 === pre) return pre;
        }
        i--;
    }
    return -1;
};
// @lc code=end

