/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (69.29%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 68.3K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length || !postorder.length) return null;
    const root: TreeNode = new TreeNode(postorder[postorder.length - 1]);
    const stack: TreeNode[] = [root];
    let idx = inorder.length - 1;
    for (let i = postorder.length - 2; i >= 0; i--) {
        let postVal = postorder[i];
        let node = stack[stack.length - 1];
        if (node.val !== inorder[idx]) {
            node.right = new TreeNode(postVal);
            stack.push(node.right);
        } else {
            while (stack.length && stack[stack.length - 1].val === inorder[idx]) {
                node = stack.pop()!;
                idx--;
            }
            node.left = new TreeNode(postVal);
            stack.push(node.left);
        }
    }
    return root;
};
// @lc code=end

