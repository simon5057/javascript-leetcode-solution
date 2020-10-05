/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
 *
 * https://leetcode-cn.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (43.88%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    22.6K
 * Total Submissions: 51.4K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key
 * 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 
 * 一般来说，删除节点可分为两个步骤：
 * 
 * 
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 * 
 * 
 * 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。
 * 
 * 示例:
 * 
 * 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * 给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
 * 
 * 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 4   6
 * ⁠/     \
 * 2       7
 * 
 * 另一个正确答案是 [5,2,6,null,4,null,7]。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 2   6
 * ⁠  \   \
 * ⁠   4   7
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return root;
    // 删除的是根元素
    if (root.val === key) {
        if (!root.left && !root.right) return null;
        if (root.left && root.right) {
            let rightSmallest = smallest(root.right);
            rightSmallest.left = root.left;
            root = root.right;
            return root;
        }
        if (root.left) return root.left;
        return root.right;
    }
    // 删除非根元素
    if (root.val > key) {
        findAndRemove(root.left, key, root);
    } else {
        findAndRemove(root.right, key, root);
    }
    return root;
};
function smallest(root: TreeNode) {
    let cur = root;
    while (cur.left) {
        cur = cur.left;
    }
    return cur;
}
function findAndRemove(root: TreeNode | null, key: number, parent: TreeNode) {
    if (!root) return;
    if (root.val === key) {
        if (!root.left && !root.right) {
            if (parent.left === root) {
                parent.left = null;
            } else {
                parent.right = null;
            }
            return;
        }
        if (root.left && root.right) {
            let rightSmallest = smallest(root.right);
            rightSmallest.left = root.left;
            if (parent.left === root) {
                parent.left = root.right;
            } else {
                parent.right = root.right;
            }
            return;
        }
        if (root.left) {
            if (parent.left === root) {
                parent.left = root.left;
            } else {
                parent.right = root.left;
            }
            return;
        }
        if (parent.left === root) {
            parent.left = root.right;
        } else {
            parent.right = root.right;
        }
        return;
    } else if (root.val > key) {
        findAndRemove(root.left, key, root);
    } else {
        findAndRemove(root.right, key, root);
    }
}
// @lc code=end

