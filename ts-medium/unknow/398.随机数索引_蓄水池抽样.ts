/*
 * @lc app=leetcode.cn id=398 lang=typescript
 *
 * [398] 随机数索引
 *
 * https://leetcode-cn.com/problems/random-pick-index/description/
 *
 * algorithms
 * Medium (62.45%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 11.8K
 * Testcase Example:  '["Solution","pick"]\n[[[1,2,3,3,3]],[3]]'
 *
 * 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。
 * 
 * 注意：
 * 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。
 * 
 * 示例:
 * 
 * 
 * int[] nums = new int[] {1,2,3,3,3};
 * Solution solution = new Solution(nums);
 * 
 * // pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
 * solution.pick(3);
 * 
 * // pick(1) 应该返回 0。因为只有nums[0]等于1。
 * solution.pick(1);
 * 
 * 
 */

// @lc code=start
class Solution {
    private map: { [key: number]: number[] } = {};
    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            if (!this.map[nums[i]]) this.map[nums[i]] = [];
            this.map[nums[i]].push(i);
        }
    }

    pick(target: number): number {
        const list = this.map[target];
        let count = 1;
        let i = 0;
        let idx: number;
        while (i < list.length) {
            if (!((Math.random() * count) >> 0)) idx = list[i];
            count++;
            i++;
        }
        return idx!;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

