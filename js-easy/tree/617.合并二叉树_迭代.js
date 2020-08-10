/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 *
 * https://leetcode-cn.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (76.27%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    56.8K
 * Total Submissions: 74.1K
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 * 
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL
 * 的节点将直接作为新二叉树的节点。
 * 
 * 示例 1:
 * 
 * 
 * 输入: 
 * Tree 1                     Tree 2                  
 * ⁠         1                         2                             
 * ⁠        / \                       / \                            
 * ⁠       3   2                     1   3                        
 * ⁠      /                           \   \                      
 * ⁠     5                             4   7                  
 * 输出: 
 * 合并后的树:
 * 3
 * / \
 * 4   5
 * / \   \ 
 * 5   4   7
 * 
 * 
 * 注意: 合并必须从两个树的根节点开始。
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    const stack = [
        [t1, t2]
    ];
    while (stack.length) {
        let t = stack.pop();
        if (t[0] === null || t[1] === null) continue;
        let val = t[0].val + t[1].val;
        t[0].val = val;
        if (t[0].left === null) {
            t[0].left = t[1].left;
        } else {
            stack.push([t[0].left, t[1].left]);
        }
        if (t[0].right === null) {
            t[0].right = t[1].right;
        } else {
            stack.push([t[0].right, t[1].right]);
        }
    }
    return t1;
};

// @lc code=end