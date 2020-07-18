/*
 * @lc app=leetcode.cn id=872 lang=typescript
 *
 * [872] 叶子相似的树
 *
 * https://leetcode-cn.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (62.91%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    13.9K
 * Total Submissions: 22.1K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * 请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 * 
 * 
 * 
 * 举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 
 * 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
 * 
 * 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的两颗树可能会有 1 到 200 个结点。
 * 给定的两颗树上的值介于 0 到 200 之间。
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return getSequence(root1) === getSequence(root2);
};
function getSequence(root: TreeNode): string {
    const stack: TreeNode[] = [root as TreeNode];
    let sequence: string = '';
    while (stack.length) {
        let cur: TreeNode = stack.pop() as TreeNode;
        if (cur.left && cur.right) {
            stack.push(cur.right, cur.left);
        } else if (cur.left) {
            stack.push(cur.left);
        } else if (cur.right) {
            stack.push(cur.right);
        } else {
            sequence += `-${cur.val}`;
        }
    }
    return sequence;
}
// @lc code=end

