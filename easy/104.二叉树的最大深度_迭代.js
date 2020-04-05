/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (72.69%)
 * Likes:    494
 * Dislikes: 0
 * Total Accepted:    151.8K
 * Total Submissions: 208.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
var maxDepth = function (root) {
    const map = new Map();
    let stack = [];
    if (!!root) {
        map.set(root, 1);
        stack.push(root);
    }
    let depth = 0;
    let cur;
    while (stack.length) {
        cur = stack.pop();
        let curDepth = map.get(cur);
        if (cur) {
            depth = Math.max(depth, curDepth);
            map.set(cur.left, curDepth + 1);
            map.set(cur.right, curDepth + 1);
            stack.push(cur.left, cur.right);
        }
    }
    return depth;
};
// @lc code=end