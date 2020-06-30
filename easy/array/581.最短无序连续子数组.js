/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (34.56%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    29.7K
 * Total Submissions: 85.7K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 
 * 你找到的子数组应是最短的，请输出它的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 
 * 说明 :
 * 
 * 
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let min = null;
    let max = null;
    let sortNums = Array.from(nums).sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortNums[i]) {
            min = i;
            break;
        }
    }
    if (min === null) return 0;
    for (let j = nums.length - 1; j >= min; j--) {
        if (nums[j] !== sortNums[j]) {
            max = j;
            break;
        }
    }
    return (max - min + 1);
};
// @lc code=end