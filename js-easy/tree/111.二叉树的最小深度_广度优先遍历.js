/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (41.94%)
 * Likes:    237
 * Dislikes: 0
 * Total Accepted:    64.2K
 * Total Submissions: 153.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;
    const map = new Map();
    const queue = [root];
    map.set(root, 1);
    let depth = Number.MAX_SAFE_INTEGER;
    let cur;
    while (queue.length) {
        cur = queue.shift();
        depth = map.get(cur);

        if (cur.left === null && cur.right === null) {
            break;
        }
        if (cur.left !== null) {
            queue.push(cur.left);
            map.set(cur.left, depth + 1);
        }
        if (cur.right !== null) {
            queue.push(cur.right);
            map.set(cur.right, depth + 1);
        }
    }
    return depth;
};
// @lc code=end