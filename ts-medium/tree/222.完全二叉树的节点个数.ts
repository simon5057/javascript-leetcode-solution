/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (71.90%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    31.1K
 * Total Submissions: 43.2K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给出一个完全二叉树，求出该树的节点个数。
 * 
 * 说明：
 * 
 * 
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第
 * h 层，则该层包含 1~ 2^h 个节点。
 * 
 * 示例:
 * 
 * 输入: 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 * 
 * 输出: 6
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

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let deep = 0;
    let cur = root;
    while (cur.left) {
        deep++;
        cur = cur.left;
    }
    if (deep === 0) return 1;
    let left = 0;
    let right = 2 ** deep - 1;
    let pivot;
    while (left <= right) {
        pivot = left + ((right - left) >>> 1);
        if (exist(pivot, deep, root)) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return 2 ** deep - 1 + left;
};
function exist(idx: number, deep: number, root: TreeNode) {
    let node: TreeNode | null = root;
    let left = 0;
    let right = 2 ** deep - 1;
    let pivot;
    for (let i = 0; i < deep; i++) {
        pivot = left + ((right - left) >>> 1);
        if (idx <= pivot) {
            node = node!.left;
            right = pivot;
        } else {
            node = node!.right;
            left = pivot + 1;
        }
    }
    return node !== null;
}
// @lc code=end

