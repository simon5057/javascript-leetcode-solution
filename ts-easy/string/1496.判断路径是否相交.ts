/*
 * @lc app=leetcode.cn id=1496 lang=typescript
 *
 * [1496] 判断路径是否相交
 *
 * https://leetcode-cn.com/problems/path-crossing/description/
 *
 * algorithms
 * Easy (53.54%)
 * Likes:    7
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 9.2K
 * Testcase Example:  '"NES"'
 *
 * 给你一个字符串 path，其中 path[i] 的值可以是 'N'、'S'、'E' 或者 'W'，分别表示向北、向南、向东、向西移动一个单位。
 * 
 * 机器人从二维平面上的原点 (0, 0) 处开始出发，按 path 所指示的路径行走。
 * 
 * 如果路径在任何位置上出现相交的情况，也就是走到之前已经走过的位置，请返回 True ；否则，返回 False 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：path = "NES"
 * 输出：false 
 * 解释：该路径没有在任何位置相交。
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：path = "NESWW"
 * 输出：true
 * 解释：该路径经过原点两次。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= path.length <= 10^4
 * path 仅由 {'N', 'S', 'E', 'W} 中的字符组成
 * 
 * 
 */

// @lc code=start
type M = { [key: string]: number[] };
function isPathCrossing(path: string): boolean {
    const map: M = {
        N: [0, 1],
        S: [0, -1],
        E: [1, 0],
        W: [-1, 0],
    }
    let x = 0;
    let y = 0;
    const set: Set<string> = new Set<string>();
    set.add(`${x}-${y}`);
    for (let i = 0; i < path.length; i++) {
        let [a, b] = map[path[i]];
        x += a;
        y += b;
        if (set.has(`${x}-${y}`)) return true;
        set.add(`${x}-${y}`);
    }
    return false;
};
// @lc code=end

