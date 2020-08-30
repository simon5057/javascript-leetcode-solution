/*
 * @lc app=leetcode.cn id=229 lang=typescript
 *
 * [229] 求众数 II
 *
 * https://leetcode-cn.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (43.49%)
 * Likes:    244
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 45.6K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: [3]
 * 
 * 示例 2:
 * 
 * 输入: [1,1,1,3,3,2,2,2]
 * 输出: [1,2]
 * 
 */

// @lc code=start
function majorityElement(nums: number[]): number[] {
    const res: number[] = [];
    if (nums.length === 0) return res;
    let candidate1 = nums[0];
    let candidate2 = nums[0];
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (candidate1 === nums[i]) {
            count1++;
            continue;
        }
        if (candidate2 === nums[i]) {
            count2++;
            continue;
        }
        if (count1 === 0) {
            candidate1 = nums[i];
            count1++;
            continue;
        }
        if (count2 === 0) {
            candidate2 = nums[i];
            count2++;
            continue;
        }
        count1--;
        count2--;
    }
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (candidate1 === nums[i]) {
            count1++;
        } else if (candidate2 === nums[i]) count2++;
    }
    if (count1 > nums.length / 3) res.push(candidate1);
    if (count2 > nums.length / 3) res.push(candidate2);
    return res;
};
// @lc code=end

