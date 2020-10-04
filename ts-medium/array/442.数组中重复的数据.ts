/*
 * @lc app=leetcode.cn id=442 lang=typescript
 *
 * [442] 数组中重复的数据
 *
 * https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/description/
 *
 * algorithms
 * Medium (67.37%)
 * Likes:    282
 * Dislikes: 0
 * Total Accepted:    24.2K
 * Total Submissions: 36K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
 * 
 * 找到所有出现两次的元素。
 * 
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * 
 * 示例：
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [2,3]
 * 
 * 
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = Math.abs(nums[i]);
        if (nums[cur - 1] < 0) {
            res.push(cur);
        } else {
            nums[cur - 1] = -nums[cur - 1];
        }
    }
    return res;
};
// @lc code=end

