/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (69.05%)
 * Likes:    760
 * Dislikes: 0
 * Total Accepted:    80.1K
 * Total Submissions: 116K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

// @lc code=start
function numTrees(n: number): number {
    if (n === 0) return 0;
    return countTree(1, n);
};
function countTree(start: number, end: number): number {
    if (start > end) return 1;
    let count = 0;
    for (let i = start; i <= end; i++) {
        let left = countTree(start, i - 1);
        let right = countTree(i + 1, end);
        count += left * right;
    }
    return count;
}
// @lc code=end

