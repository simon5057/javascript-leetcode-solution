/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (60.51%)
 * Likes:    447
 * Dislikes: 0
 * Total Accepted:    78.5K
 * Total Submissions: 129.8K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 * 
 * 
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const map: { [key: number]: number } = {};
    for (const n of nums) {
        if (!map[n]) map[n] = 0;
        map[n]++;
    }
    const t: number[][] = [];
    for (const k of Object.keys(map)) {
        let idx = map[+k];
        if (!t[idx]) t[idx] = [];
        t[idx].push(+k);
    }
    const res: number[] = [];
    for (let i = t.length - 1; i >= 0 && k > 0; i--) {
        if (!t[i]) continue;
        for (const x of t[i]) {
            res.push(x);
            k--;
        }
    }
    return res;
};
// @lc code=end

