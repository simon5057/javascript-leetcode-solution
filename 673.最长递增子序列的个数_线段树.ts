/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 *
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (37.01%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 45.5K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
 * 
 */

// @lc code=start
function findNumberOfLIS(nums: number[]): number {
  if (!nums.length) return 0;
  let max = nums[0], min = nums[0];
  for (const n of nums) {
    max = Math.max(n, max);
    min = Math.min(n, min);
  }
  const root = new TNode(min, max);
  for (const n of nums) {
    let val = query(root, n - 1);
    insert(root, n, new Value(val.length + 1, val.count));
  }
  return root.val.count;
};
class Value {
  constructor(public length: number, public count: number) { }
}
class TNode {
  rangeLeft: number;
  rangeRight: number;
  left: TNode | null = null;
  right: TNode | null = null;
  val: Value;
  constructor(start: number, end: number) {
    this.rangeLeft = start;
    this.rangeRight = end;
    this.val = new Value(0, 1);
  }
  getRangeMid(): number {
    return Math.floor(this.rangeLeft + (this.rangeRight - this.rangeLeft) / 2);
  }
  getLeft(): TNode {
    if (this.left === null) this.left = new TNode(this.rangeLeft, this.getRangeMid());
    return this.left;
  }
  getRight(): TNode {
    if (this.right === null) this.right = new TNode(this.getRangeMid() + 1, this.rangeRight);
    return this.right;
  }
}
function merge(val1: Value, val2: Value): Value {
  if (val1.length === val2.length) {
    if (val1.length === 0) return new Value(0, 1);
    return new Value(val1.length, val1.count + val2.count);
  }
  return val1.length > val2.length ? val1 : val2;
}
function query(node: TNode, key: number): Value {
  if (node.rangeRight <= key) return node.val;
  if (node.rangeLeft > key) return new Value(0, 1);
  return merge(query(node.getLeft(), key), query(node.getRight(), key));
}
function insert(node: TNode, key: number, val: Value) {
  if (node.rangeLeft === node.rangeRight) {
    node.val = merge(val, node.val)
    return;
  }
  if (key <= node.getRangeMid()) {
    insert(node.getLeft(), key, val);
  } else {
    insert(node.getRight(), key, val);
  }
  node.val = merge(node.getLeft().val, node.getRight().val);
}
// @lc code=end

