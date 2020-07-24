/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
 *
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (51.44%)
 * Likes:    76
 * Dislikes: 0
 * Total Accepted:    10.4K
 * Total Submissions: 20.3K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 
 * 如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点。
 * 
 * 我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值 x 和 y。
 * 
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,4], x = 4, y = 3
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 输入：root = [1,2,3,null,4], x = 2, y = 3
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 二叉树的节点数介于 2 到 100 之间。
 * 每个节点的值都是唯一的、范围为 1 到 100 的整数。
 * 
 * 
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
interface NodeDetails {
    deep: number;
    node: TreeNode
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (!root) return false;
    const queue: NodeDetails[] = [{ deep: 0, node: root }];
    let deepX;
    let deepY;
    while (queue.length) {
        let { deep, node } = queue.shift() as NodeDetails;
        if (node.left && node.right) {
            if ((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x)) return false;
        }
        if (node.val === x) {
            deepX = deep;
        } else if (node.val === y) {
            deepY = deep;
        }
        if (node.left) queue.push({ deep: deep + 1, node: node.left });
        if (node.right) queue.push({ deep: deep + 1, node: node.right });
    }
    return deepX === deepY;
};
// @lc code=end

