/*
 * @lc app=leetcode.cn id=449 lang=typescript
 *
 * [449] 序列化和反序列化二叉搜索树
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-bst/description/
 *
 * algorithms
 * Medium (53.09%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 15.4K
 * Testcase Example:  '[2,1,3]'
 *
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 * 
 * 设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。
 * 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 
 * 编码的字符串应尽可能紧凑。
 * 
 * 注意：不要使用类成员/全局/静态变量来存储状态。 你的序列化和反序列化算法应该是无状态的。
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

/*
 * Encodes a tree to a single string.
 */
function serialize(nums: TreeNode | null): string {
    let list = preorder(nums);
    return list.join(' ');
};

function preorder(root: TreeNode | null): number[] {
    if (!root) return [];
    return [root.val, ...preorder(root.left), ...preorder(root.right)];
}
/*
 * Decodes your encoded data to tree.
 */
function deserialize(nums: string): TreeNode | null {
    if (!nums) return null;
    let list = nums.split(' ');
    return helper(-Infinity, Infinity, list);
};

function helper(lower: number, upper: number, nums: string[]): TreeNode | null {
    if (!nums.length) return null;
    let val = +nums[0];
    if (val < lower || val > upper) return null;
    nums.shift();
    let root = new TreeNode(val);
    root.left = helper(lower, val, nums);
    root.right = helper(val, upper, nums);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

