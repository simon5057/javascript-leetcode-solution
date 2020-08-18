/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (60.80%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    67.1K
 * Total Submissions: 110.4K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \    / \
 * ⁠       7    2  5   1
 * 
 * 
 * 返回:
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
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

function pathSum(root: TreeNode | null, sum: number): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const stack: [TreeNode, number[], number][] = [[root, [root.val], sum - root.val]];
    while (stack.length) {
        let [cur, temp, leftSum] = stack.pop()!;
        if (!cur.left && !cur.right) {
            if (leftSum === 0) res.push(temp);
            continue;
        }
        if (cur.left) {
            let tempNext = Array.from(temp);
            tempNext.push(cur.left.val);
            stack.push([cur.left, tempNext, leftSum - cur.left.val]);
        }
        if (cur.right) {
            let tempNext = Array.from(temp);
            tempNext.push(cur.right.val);
            stack.push([cur.right, tempNext, leftSum - cur.right.val]);
        }
    }
    return res;
};
// @lc code=end

