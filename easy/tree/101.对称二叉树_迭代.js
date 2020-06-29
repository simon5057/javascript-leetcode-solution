/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (50.66%)
 * Likes:    701
 * Dislikes: 0
 * Total Accepted:    117.6K
 * Total Submissions: 232.1K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */

var isSymmetric = function (root) {
    const queue = [root, root];
    let q1, q2;
    while (queue.length) {
        q1 = queue.shift();
        q2 = queue.shift();
        if (q1 === null && q2 === null) continue;
        if (q1 === null || q2 === null) return false;
        if (q1.val !== q2.val) return false;
        queue.push(q1.left);
        queue.push(q2.right);
        queue.push(q1.right);
        queue.push(q2.left);
    }
    return true;
}
// @lc code=end