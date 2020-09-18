/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.31%)
 * Likes:    396
 * Dislikes: 0
 * Total Accepted:    121.3K
 * Total Submissions: 167.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const stack: [TreeNode, boolean][] = [[root, false]];
    const res: number[] = [];
    while (stack.length) {
        let [cur, flag] = stack.pop()!;
        if (flag) {
            res.push(cur.val);
        } else {
            stack.push([cur, true]);
            if (cur.right) stack.push([cur.right, false]);
            if (cur.left) stack.push([cur.left, false]);
        }
    }
    return res;
};
// @lc code=end

