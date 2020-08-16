/*
 * @lc app=leetcode.cn id=95 lang=typescript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (66.61%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    57.6K
 * Total Submissions: 86.5K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：3
 * 输出：
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释：
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) return [];
    return genTrees(1, n);
};
function genTrees(start: number, end: number): Array<TreeNode | null> {
    if (start > end) return [null];
    let allTree: Array<TreeNode | null> = [];
    for (let i = start; i <= end; i++) {
        let left = genTrees(start, i - 1);
        let right = genTrees(i + 1, end);
        for (const l of left) {
            for (const r of right) {
                let cur = new TreeNode(i);
                cur.left = l;
                cur.right = r;
                allTree.push(cur);
            }
        }
    }
    return allTree;
}
// @lc code=end

