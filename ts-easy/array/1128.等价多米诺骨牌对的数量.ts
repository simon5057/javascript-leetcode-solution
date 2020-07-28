/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 *
 * https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (45.40%)
 * Likes:    28
 * Dislikes: 0
 * Total Accepted:    6.5K
 * Total Submissions: 14.3K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 * 
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 * 
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且
 * b==c。
 * 
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对
 * (i, j) 的数量。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 * 
 * 
 */

// @lc code=start
interface M {
    [key: number]: boolean
}
function numEquivDominoPairs(dominoes: number[][]): number {
    const map: M = {}
    let res: number = 0;
    for (let i = 0; i < dominoes.length - 1; i++) {
        if (map[i]) continue;
        let count: number = 1;
        let [x1, y1] = dominoes[i];
        for (let j = i + 1; j < dominoes.length; j++) {
            let [x2, y2] = dominoes[j];
            if (x1 === x2 && y1 === y2 || x1 === y2 && x2 === y1) {
                map[j] = true;
                count++;
            }
        }
        res += getPairTimes(count);
    }
    return res;
};
function getPairTimes(n: number): number {
    if (n <= 1) return 0;
    return getPairTimes(n - 1) + (n - 1);
}
// @lc code=end

