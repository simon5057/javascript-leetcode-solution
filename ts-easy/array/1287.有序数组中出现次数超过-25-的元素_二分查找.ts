/*
 * @lc app=leetcode.cn id=1287 lang=typescript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 *
 * https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * algorithms
 * Easy (61.31%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    7.8K
 * Total Submissions: 12.8K
 * Testcase Example:  '[1,2,2,6,6,6,6,7,10]'
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 
 * 请你找到并返回这个整数
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 * 
 * 
 */

// @lc code=start
function findSpecialInteger(arr: number[]): number {
    let step = ((arr.length / 4) >> 0) + 1;
    for (let i = 0; i < arr.length; i += step) {
        let [l, r] = getRange(arr, i);
        if (r - l + 1 >= step) return arr[i];
    }
    return -1;
};
function getRange(arr: number[], i: number): number[] {
    let l: number = i;
    let r: number = i;
    while (arr[l] === arr[i]) {
        l--;
    }
    while (arr[r] === arr[i]) {
        r++;
    }
    return [l + 1, r - 1];
}
// @lc code=end

