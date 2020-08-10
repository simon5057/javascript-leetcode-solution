/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 *
 * https://leetcode-cn.com/problems/longest-univalue-path/description/
 *
 * algorithms
 * Easy (40.84%)
 * Likes:    299
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 46.4K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
 * 
 * 注意：两个节点之间的路径长度由它们之间的边数表示。
 * 
 * 示例 1:
 * 
 * 输入:
 * 
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         1   1   5
 * 
 * 
 * 输出:
 * 
 * 
 * 2
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 
 * 
 * ⁠             1
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         4   4   5
 * 
 * 
 * 输出:
 * 
 * 
 * 2
 * 
 * 
 * 注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。
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
var longestUnivaluePath = function (root) {
    let res = 0;
    (function calc(root) {
        if (!root) return 0;
        let left = calc(root.left);
        let right = calc(root.right);
        let arrowLeft = 0;
        let arrowRight = 0;
        if (root.left && root.left.val === root.val) {
            arrowLeft += left + 1;
        }
        if (root.right && root.right.val === root.val) {
            arrowRight += right + 1;
        }
        res = Math.max(res, arrowLeft + arrowRight);
        return Math.max(arrowLeft, arrowRight);
    })(root);
    return res;
};

// @lc code=end