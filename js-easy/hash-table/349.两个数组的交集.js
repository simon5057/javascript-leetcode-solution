/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (68.70%)
 * Likes:    182
 * Dislikes: 0
 * Total Accepted:    67.6K
 * Total Submissions: 97.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let unite = [];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    if (set1.size < set2.size) {
        for (const v of set2) {
            if (set1.has(v)) unite.push(v);
        }
    } else {
        for (const v of set1) {
            if (set2.has(v)) unite.push(v);
        }
    }
    return unite;
};
// @lc code=end