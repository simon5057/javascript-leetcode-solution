/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.75%)
 * Likes:    535
 * Dislikes: 0
 * Total Accepted:    141.7K
 * Total Submissions: 309.8K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let res = 0;
    let diff = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let k = nums.length - 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            while (j < k && nums[i] + nums[j] + nums[k] > target) {
                k--;
            }
            let r = Math.abs(target - (nums[i] + nums[j] + nums[k + 1]));
            if (r < diff) {
                diff = r;
                res = nums[i] + nums[j] + nums[k + 1];
            }
            if (j !== k) {
                let l = Math.abs(target - (nums[i] + nums[j] + nums[k]));
                if (l < diff) {
                    diff = l;
                    res = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return res;
};
// @lc code=end

