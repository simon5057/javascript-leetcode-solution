/*
 * @lc app=leetcode.cn id=399 lang=typescript
 *
 * [399] 除法求值
 *
 * https://leetcode-cn.com/problems/evaluate-division/description/
 *
 * algorithms
 * Medium (54.99%)
 * Likes:    220
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 21.2K
 * Testcase Example:  '[["a","b"],["b","c"]]\n[2.0,3.0]\n[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
 *
 * 给出方程式 A / B = k, 其中 A 和 B 均为用字符串表示的变量， k
 * 是一个浮点型数字。根据已知方程式求解问题，并返回计算结果。如果结果不存在，则返回 -1.0。
 * 
 * 示例 :
 * 给定 a / b = 2.0, b / c = 3.0
 * 问题:  a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
 * 返回 [6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 
 * 输入为:  vector<pair<string, string>> equations, vector<double>& values,
 * vector<pair<string, string>> queries(方程式，方程式结果，问题方程式)， 其中 equations.size()
 * == values.size()，即方程式的长度与方程式结果长度相等（程式与结果一一对应），并且结果值均为正数。以上为方程式的描述。
 * 返回vector<double>类型。
 * 
 * 基于上述例子，输入如下：
 * 
 * equations(方程式) = [ ["a", "b"], ["b", "c"] ],
 * values(方程式结果) = [2.0, 3.0],
 * queries(问题方程式) = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x",
 * "x"] ]. 
 * 
 * 
 * 输入总是有效的。你可以假设除法运算中不会出现除数为0的情况，且不存在任何矛盾的结果。
 * 
 */

// @lc code=start
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const parents: { [key: string]: string } = {};
    const weights: { [key: string]: number } = {};
    function find(a: string): [string, number] {
        if (!parents[a]) return ['', -1];
        let res = -1;
        while (a !== parents[a]) {
            res *= weights[a];
            a = parents[a];
        }
        return [a, res];
    }
    function union(a: string, b: string, val: number) {
        let [k1, v1] = find(a);
        let [k2, v2] = find(b);
        if (k1 === '' || k2 === '') return;
        if (k1 === k2) return;
        parents[k1] = k2;
        weights[k1] = (v2 / v1) * val;
    }

    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        if (!parents[a]) {
            parents[a] = a;
            weights[a] = 1;
        }
        if (!parents[b]) {
            parents[b] = b;
            weights[b] = 1;
        }
        union(a, b, values[i]);
    }

    let res: number[] = [];
    for (const q of queries) {
        const [x, y] = q;
        let [k1, v1] = find(x);
        let [k2, v2] = find(y);
        if (k1 !== k2 || k1 === '' || k2 === '') {
            res.push(-1);
        } else {
            res.push(v1 / v2);
        }
    }
    return res;
};
// @lc code=end

