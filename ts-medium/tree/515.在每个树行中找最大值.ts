/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (62.41%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 31.6K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 您需要在二叉树的每一行中找到最大的值。
 * 
 * 示例：
 * 
 * 
 * 输入: 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \  
 * ⁠     5   3   9 
 * 
 * 输出: [1, 3, 9]
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

function largestValues(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];
    while (queue.length) {
        let max = queue[0].val;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift()!;
            max = Math.max(max, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
    }
    return res;
};
// @lc code=end

