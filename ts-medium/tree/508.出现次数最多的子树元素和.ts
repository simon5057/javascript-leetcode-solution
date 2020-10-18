/*
 * @lc app=leetcode.cn id=508 lang=typescript
 *
 * [508] 出现次数最多的子树元素和
 *
 * https://leetcode-cn.com/problems/most-frequent-subtree-sum/description/
 *
 * algorithms
 * Medium (64.86%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 13.4K
 * Testcase Example:  '[5,2,-3]'
 *
 * 给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。
 * 
 * 你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。
 * 
 * 
 * 
 * 示例 1：
 * 输入:
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -3
 * 
 * 
 * 返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。
 * 
 * 示例 2：
 * 输入：
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -5
 * 
 * 
 * 返回 [2]，只有 2 出现两次，-5 只出现 1 次。
 * 
 * 
 * 
 * 提示： 假设任意子树元素和均可以用 32 位有符号整数表示。
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

function findFrequentTreeSum(root: TreeNode | null): number[] {
    if (!root) return [];
    let res: number[] = [];
    let count = 0;
    const map = new Map<number, number>();
    function dfs(root: TreeNode): number {
        let left = 0;
        let right = 0;
        if (root.left) left = dfs(root.left);
        if (root.right) right = dfs(root.right);
        let val = root.val + left + right;
        let cur = map.get(val) || 0;
        cur++;
        if (cur > count) {
            res = [val];
            count++;
        } else if (cur === count) {
            res.push(val);
        }
        map.set(val, cur);
        return val;
    }
    dfs(root);
    return res;
};
// @lc code=end

