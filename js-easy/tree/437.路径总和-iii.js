/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Easy (55.09%)
 * Likes:    422
 * Dislikes: 0
 * Total Accepted:    35.8K
 * Total Submissions: 65K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 
 * 找出路径和等于给定数值的路径总数。
 * 
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 * 
 * 示例：
 * 
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 * 
 * ⁠     10
 * ⁠    /  \
 * ⁠   5   -3
 * ⁠  / \    \
 * ⁠ 3   2   11
 * ⁠/ \   \
 * 3  -2   1
 * 
 * 返回 3。和等于 8 的路径有:
 * 
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3.  -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
// 将其拆分为 ： 当前节点开始，当前节点左子节点开始，当前节点右子节点开始
var pathSum = function (root, sum) {
    if (root === null) return 0;
    let res = countPath(root, sum);
    let left = pathSum(root.left, sum);
    let right = pathSum(root.right, sum);
    return res + left + right;
};

function countPath(root, sum) {
    if (root === null) return 0;
    sum = sum - root.val;
    return (sum === 0 ? 1 : 0) + countPath(root.left, sum) + countPath(root.right, sum);
}
// @lc code=end