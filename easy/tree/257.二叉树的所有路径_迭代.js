/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (63.22%)
 * Likes:    254
 * Dislikes: 0
 * Total Accepted:    36.3K
 * Total Submissions: 56.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return [];

    const res = [];
    const stack = [root];
    const pathStack = [root.val + ''];
    while (stack.length) {
        let cur = stack.pop();
        let curPath = pathStack.pop();

        if (!cur.left && !cur.right) {
            res.push(curPath);
        }
        if (cur.left) {
            stack.push(cur.left);
            pathStack.push(curPath + '->' + cur.left.val);
        }
        if (cur.right) {
            stack.push(cur.right);
            pathStack.push(curPath + '->' + cur.right.val);
        }
    }
    return res;
};
// @lc code=end