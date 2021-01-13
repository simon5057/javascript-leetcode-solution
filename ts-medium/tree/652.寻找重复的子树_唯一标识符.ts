/*
 * @lc app=leetcode.cn id=652 lang=typescript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (55.34%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    16.3K
 * Total Submissions: 29.4K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 * 
 * 示例 1：
 * 
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   2   4
 * ⁠      /
 * ⁠     4
 * 
 * 
 * 下面是两个重复的子树：
 * 
 * ⁠     2
 * ⁠    /
 * ⁠   4
 * 
 * 
 * 和
 * 
 * ⁠   4
 * 
 * 
 * 因此，你需要以列表的形式返回上述重复子树的根结点。
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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const ids = new Map<string, number>();
  const counts = new Map<number, number>();
  let curId = 1;
  const result: Array<TreeNode | null> = [];
  function collect(node: TreeNode | null): number {
    if (node === null) return 0;
    let key = `${node.val},${collect(node.left)},${collect(node.right)}`;
    let uid;
    if (!(uid = ids.get(key))) {
      ids.set(key, curId);
      uid = curId;
      curId++;
    }
    counts.set(uid, (counts.get(uid) || 0) + 1);
    if (counts.get(uid) === 2) result.push(node);
    return uid;
  }
  collect(root);
  return result;
};
// @lc code=end

