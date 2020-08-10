/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (54.66%)
 * Likes:    151
 * Dislikes: 0
 * Total Accepted:    25.6K
 * Total Submissions: 46.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
 * 
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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    if (!root) return sum;
    let queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        if (cur.left) {
            if (cur.left.left === null && cur.left.right === null) {
                sum += cur.left.val;
            } else {
                queue.push(cur.left);
            }
        }
        if (cur.right && (cur.right.left !== null || cur.right.right !== null)) queue.push(cur.right);
    }
    return sum;
};
// @lc code=end