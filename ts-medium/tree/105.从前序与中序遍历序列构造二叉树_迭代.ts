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
    const root: TreeNode = new TreeNode(preorder[0]);
    const stack: TreeNode[] = [root];
    let idx = 0;
    for (let i = 1; i < preorder.length; i++) {
        let preVal = preorder[i];
        let node = stack[stack.length - 1];
        if (node.val !== inorder[idx]) {
            node.left = new TreeNode(preVal);
            stack.push(node.left);
        } else {
            while (stack.length && stack[stack.length - 1].val === inorder[idx]) {
                node = stack.pop()!;
                idx++;
            }
            node.right = new TreeNode(preVal);
            stack.push(node.right);
        }
    }
    return root;
};
// @lc code=end

