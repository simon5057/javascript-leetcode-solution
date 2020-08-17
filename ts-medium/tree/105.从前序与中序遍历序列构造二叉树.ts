/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (67.75%)
 * Likes:    622
 * Dislikes: 0
 * Total Accepted:    105.3K
 * Total Submissions: 155.3K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;
    return dfs(preorder, inorder);
};
function dfs(preorder: number[], inorder: number[]) {
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let idx = inorder.findIndex(v => rootVal === v);
    let left = inorder.slice(0, idx);
    let right = inorder.slice(idx + 1);
    if (left.length) root.left = dfs(preorder.slice(1, left.length + 1), left);
    if (right.length) root.right = dfs(preorder.slice(left.length + 1), right);
    return root;
}
// @lc code=end

