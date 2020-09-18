/*
 * @lc app=leetcode.cn id=386 lang=typescript
 *
 * [386] 字典序排数
 *
 * https://leetcode-cn.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (71.80%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 17.2K
 * Testcase Example:  '13'
 *
 * 给定一个整数 n, 返回从 1 到 n 的字典顺序。
 * 
 * 例如，
 * 
 * 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
 * 
 * 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
 * 
 */

// @lc code=start
function lexicalOrder(n: number): number[] {
    let count = 0;
    let x = n;
    while (x) {
        x = Math.floor(x / 10);
        count++;
    }
    const res: number[] = [];
    let num = 0;
    getNum(num, count, res);
    function getNum(num: number, count: number, output: number[]) {
        for (let i = 0; i <= 9; i++) {
            let cur = num * 10 + i;
            if (!cur) continue;
            if (cur > n) return;
            output.push(cur);
            if (count > 1) getNum(cur, count - 1, output);
        }
    }
    return res;
};
// @lc code=end

