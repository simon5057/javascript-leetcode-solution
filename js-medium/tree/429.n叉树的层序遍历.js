/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (66.66%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    30.5K
 * Total Submissions: 45.7K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其层序遍历:
 * 
 * [
 * ⁠    [1],
 * ⁠    [3,2,4],
 * ⁠    [5,6]
 * ]
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总数不会超过 5000。
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        let len = queue.length;
        let cur = [];
        for (let i = 0; i < len; i++) {
            let x = queue.shift();
            cur.push(x.val);
            if (x.children && x.children.length) {
                queue.push(...x.children);
            }
        }
        res.push(cur);
    }
    return res;
};
// @lc code=end