/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (69.44%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    25.7K
 * Total Submissions: 36.9K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，找到其最大深度。
 * 
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 我们应返回其最大深度，3。
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总不会超过 5000。
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let maxDep = 0;
    let stack = [
        [root, 1]
    ];
    while (stack.length) {
        let [cur, curDepth] = stack.pop();
        if (cur.children.length) {
            stack.push(...cur.children.map(node => [node, curDepth + 1]));
        }
        maxDep = Math.max(maxDep, curDepth);
    }
    return maxDep;
};
// @lc code=end