/*
 * @lc app=leetcode.cn id=368 lang=typescript
 *
 * [368] 最大整除子集
 *
 * https://leetcode-cn.com/problems/largest-divisible-subset/description/
 *
 * algorithms
 * Medium (38.42%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 23.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给出一个由无重复的正整数组成的集合，找出其中最大的整除子集，子集中任意一对 (Si，Sj) 都要满足：Si % Sj = 0 或 Sj % Si =
 * 0。
 * 
 * 如果有多个目标子集，返回其中任何一个均可。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2] (当然, [1,3] 也正确)
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,4,8]
 * 输出: [1,2,4,8]
 * 
 * 
 */

// @lc code=start
function largestDivisibleSubset(nums: number[]): number[] {
    if (nums.length === 0) return [];
    nums.sort((a, b) => a - b);
    const map: number[][] = Array.from(nums, () => []);
    for (let i = 0; i < nums.length; i++) {
        let max: number[] = [];
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && map[j].length > max.length) {
                max = map[j];
            }
        }
        map[i].push(...max);
        map[i].push(nums[i]);
    }
    let res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (res.length < map[i].length) res = map[i];
    }
    return res;
};
// @lc code=end

