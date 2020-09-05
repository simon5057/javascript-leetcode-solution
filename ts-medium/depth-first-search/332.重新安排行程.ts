/*
 * @lc app=leetcode.cn id=332 lang=typescript
 *
 * [332] 重新安排行程
 *
 * https://leetcode-cn.com/problems/reconstruct-itinerary/description/
 *
 * algorithms
 * Medium (43.85%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    25K
 * Total Submissions: 57K
 * Testcase Example:  '[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'
 *
 * 给定一个机票的字符串二维数组 [from,
 * to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从
 * JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 如果存在多种有效的行程，请你按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"]
 * 相比就更小，排序更靠前
 * 所有的机场都用三个大写字母表示（机场代码）。
 * 假定所有机票至少存在一种合理的行程。
 * 所有的机票必须都用一次 且 只能用一次。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * 输出：["JFK", "MUC", "LHR", "SFO", "SJC"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * 输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
 * 解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后。
 * 
 */

// @lc code=start
function findItinerary(tickets: string[][]): string[] {
    const map: { [key: string]: string[] } = {};
    for (let i = 0; i < tickets.length; i++) {
        const [x, y] = tickets[i];
        if (!map[x]) map[x] = [];
        map[x].push(y);
    }
    for (const key of Object.keys(map)) {
        map[key].sort();
    }
    const res: string[] = ['JFK'];
    dfs('JFK', 0);
    function dfs(cur: string, used: number) {
        if (used === tickets.length) return true;
        const nexts = map[cur];
        if (!nexts || !nexts.length) return false;
        for (let i = 0; i < nexts.length; i++) {
            const n = nexts[i];
            nexts.splice(i, 1);
            res.push(n);
            if (dfs(n, used + 1)) return true;
            nexts.splice(i, 0, n);
            res.pop();
        }
    }
    return res;
};
// @lc code=end

