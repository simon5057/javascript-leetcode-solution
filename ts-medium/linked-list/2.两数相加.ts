/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (37.91%)
 * Likes:    4707
 * Dislikes: 0
 * Total Accepted:    504.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;
    const guard = new ListNode();
    let cur = guard;
    let digits = 0;
    while (c1 || c2 || digits) {
        let n = digits;
        if (c1) {
            n += c1.val;
            c1 = c1.next;
        }
        if (c2) {
            n += c2.val;
            c2 = c2.next;
        }
        cur.next = new ListNode(n % 10);
        cur = cur.next;
        digits = (n / 10) >> 0;
    }
    return guard.next;
};
// @lc code=end

