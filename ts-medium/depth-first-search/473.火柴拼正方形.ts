/*
 * @lc app=leetcode.cn id=473 lang=typescript
 *
 * [473] 火柴拼正方形
 *
 * https://leetcode-cn.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (39.79%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    12K
 * Total Submissions: 30.1K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * 
 * 还记得童话《卖火柴的小女孩》吗？现在，你知道小女孩有多少根火柴，请找出一种能使用所有火柴拼成一个正方形的方法。不能折断火柴，可以把火柴连接起来，并且每根火柴都要用到。
 * 
 * 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,1,2,2,2]
 * 输出: true
 * 
 * 解释: 能拼成一个边长为2的正方形，每边两根火柴。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,3,3,3,4]
 * 输出: false
 * 
 * 解释: 不能用所有火柴拼成一个正方形。
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的火柴长度和在 0 到 10^9之间。
 * 火柴数组的长度不超过15。
 * 
 * 
 */

// @lc code=start
function makesquare(nums: number[]): boolean {
    if (!nums.length) return false;
    let perimeter = 0;
    for (const n of nums) {
        perimeter += n;
    }
    const width = perimeter / 4;
    if (perimeter % 4 !== 0) return false;
    nums.sort((a, b) => b - a);
    const sums: number[] = Array.from({ length: 4 }, () => 0);
    let len = nums.length;
    function dfs(idx: number) {
        if (idx === len) {
            return sums[0] === sums[1] && sums[1] === sums[2] && sums[2] === sums[3];
        }
        let cur = nums[idx];
        for (let i = 0; i < 4; i++) {
            if (sums[i] + cur <= width) {
                sums[i] += cur;
                if (dfs(idx + 1)) return true;
                sums[i] -= cur;
            }
        }
        return false;
    }
    return dfs(0);
};
// @lc code=end

