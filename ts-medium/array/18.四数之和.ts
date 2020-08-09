/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (38.17%)
 * Likes:    534
 * Dislikes: 0
 * Total Accepted:    97.4K
 * Total Submissions: 255.2K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                let increase = false;
                let decrease = false;
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    increase = true;
                    decrease = true;
                } else if (sum > target) {
                    decrease = true;
                } else {
                    increase = true;
                }
                if (increase) {
                    let k1 = k + 1;
                    while (nums[k1] === nums[k1 - 1]) {
                        k1++;
                    }
                    k = k1;
                }
                if (decrease) {
                    let l1 = l - 1;
                    while (nums[l1] === nums[l1 + 1]) {
                        l1--;
                    }
                    l = l1;
                }
            }
        }
    }
    return res;
};
// @lc code=end

