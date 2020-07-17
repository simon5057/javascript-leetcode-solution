/*
 * @lc app=leetcode.cn id=849 lang=typescript
 *
 * [849] 到最近的人的最大距离
 *
 * https://leetcode-cn.com/problems/maximize-distance-to-closest-person/description/
 *
 * algorithms
 * Easy (40.36%)
 * Likes:    103
 * Dislikes: 0
 * Total Accepted:    10.5K
 * Total Submissions: 26.1K
 * Testcase Example:  '[1,0,0,0,1,0,1]'
 *
 * 在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。
 * 
 * 至少有一个空座位，且至少有一人坐在座位上。
 * 
 * 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
 * 
 * 返回他到离他最近的人的最大距离。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,0,0,0,1,0,1]
 * 输出：2
 * 解释：
 * 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
 * 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
 * 因此，他到离他最近的人的最大距离是 2 。 
 * 
 * 
 * 示例 2：
 * 
 * 输入：[1,0,0,0]
 * 输出：3
 * 解释：
 * 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
 * 这是可能的最大距离，所以答案是 3 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= seats.length <= 20000
 * seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。
 * 
 * 
 */

// @lc code=start
function maxDistToClosest(seats: number[]): number {
    let i = -1;
    let max = 0;
    for (let j = 0; j < seats.length; j++) {
        if (seats[j] === 0) {
            if (j === seats.length - 1) max = Math.max(max, j - i);
        } else {
            if (i === -1) {
                max = j;
            } else {
                max = Math.max(max, (j - i) >> 1);
            }
            i = j;
        }
    }
    return max;
};
// @lc code=end

