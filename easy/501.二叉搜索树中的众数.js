/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 *
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (44.82%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    14.8K
 * Total Submissions: 32.9K
 * Testcase Example:  '[1,null,2,2]'
 *
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 
 * 假定 BST 有如下定义：
 * 
 * 
 * 结点左子树中所含结点的值小于等于当前结点的值
 * 结点右子树中所含结点的值大于等于当前结点的值
 * 左子树和右子树都是二叉搜索树
 * 
 * 
 * 例如：
 * 给定 BST [1,null,2,2],
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  2
 * 
 * 
 * 返回[2].
 * 
 * 提示：如果众数超过1个，不需考虑输出顺序
 * 
 * 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    if (!root) return [];
    const map = {};
    const queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        if (map[cur.val]) {
            map[cur.val]++;
        } else {
            map[cur.val] = 1;
        }
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    let res = [];
    let max = 0;
    for (const key in map) {
        if (map[key] > max) {
            res = [key];
            max = map[key];
        } else if (map[key] === max) {
            res.push(key);
        }
    }
    return res;
};
// @lc code=end