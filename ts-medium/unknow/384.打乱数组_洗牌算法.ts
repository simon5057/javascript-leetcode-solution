/*
 * @lc app=leetcode.cn id=384 lang=typescript
 *
 * [384] 打乱数组
 *
 * https://leetcode-cn.com/problems/shuffle-an-array/description/
 *
 * algorithms
 * Medium (53.43%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    26.7K
 * Total Submissions: 49.8K
 * Testcase Example:  '["Solution","shuffle","reset","shuffle"]\n[[[1,2,3]],[],[],[]]'
 *
 * 打乱一个没有重复元素的数组。
 * 
 * 
 * 
 * 示例:
 * 
 * // 以数字集合 1, 2 和 3 初始化数组。
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 
 * // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
 * solution.shuffle();
 * 
 * // 重设数组到它的初始状态[1,2,3]。
 * solution.reset();
 * 
 * // 随机返回数组[1,2,3]打乱后的结果。
 * solution.shuffle();
 * 
 * 
 */

// @lc code=start
class Solution {
    private nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    reset(): number[] {
        return Array.from(this.nums);
    }

    shuffle(): number[] {
        const res: number[] = Array.from(this.nums);
        let len = res.length;
        for (let i = 0; i < len; i++) {
            let idx = ((Math.random() * (len - i)) >> 0) + i;
            [res[i], res[idx]] = [res[idx], res[i]];
        }
        return res;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

