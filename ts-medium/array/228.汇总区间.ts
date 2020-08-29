/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 *
 * https://leetcode-cn.com/problems/summary-ranges/description/
 *
 * algorithms
 * Medium (53.59%)
 * Likes:    55
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 23.5K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 * 
 * 示例 1:
 * 
 * 输入: [0,1,2,4,5,7]
 * 输出: ["0->2","4->5","7"]
 * 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 * 
 * 示例 2:
 * 
 * 输入: [0,2,3,4,6,8,9]
 * 输出: ["0","2->4","6","8->9"]
 * 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 * 
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    const res: string[] = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (nums[j] === nums[j + 1] - 1 && j < nums.length) {
            j++;
        }
        if (j === i) {
            res.push(String(nums[i]));
        } else {
            res.push(String(nums[i]) + '->' + String(nums[j]))
            i = j;
        }
    }
    return res;
};
// @lc code=end

