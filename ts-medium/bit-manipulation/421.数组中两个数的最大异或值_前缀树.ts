/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 *
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 *
 * algorithms
 * Medium (59.71%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    6.9K
 * Total Submissions: 11.6K
 * Testcase Example:  '[3,10,5,25,2,8]'
 *
 * 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
 * 
 * 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
 * 
 * 你能在O(n)的时间解决这个问题吗？
 * 
 * 示例:
 * 
 * 
 * 输入: [3, 10, 5, 25, 2, 8]
 * 
 * 输出: 28
 * 
 * 解释: 最大的结果是 5 ^ 25 = 28.
 * 
 * 
 */

// @lc code=start
class TrieNode {
    public children: { [key: string]: TrieNode } = {};
}
function findMaximumXOR(nums: number[]): number {
    let max = nums[0];
    for (const n of nums) {
        max = Math.max(n, max);
    }
    let len = max.toString(2).length;
    const bitStrNums: string[] = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i].toString(2);
        bitStrNums[i] = '0'.repeat(len - cur.length) + cur;
    }
    const trie = new TrieNode();
    let maxXor = 0;
    for (const num of bitStrNums) {
        let node = trie;
        let xorNode = trie;
        let curXor = 0;
        for (const n of num) {
            if (node.children[n]) {
                node = node.children[n];
            } else {
                let newNode = new TrieNode();
                node.children[n] = newNode;
                node = newNode;
            }
            let bit = n === '1' ? '0' : '1';
            if (xorNode.children[bit]) {
                curXor = (curXor << 1) | 1;
                xorNode = xorNode.children[bit];
            } else {
                curXor <<= 1;
                xorNode = xorNode.children[n];
            }
        }
        maxXor = Math.max(maxXor, curXor);
    }
    return maxXor;
};
// @lc code=end

