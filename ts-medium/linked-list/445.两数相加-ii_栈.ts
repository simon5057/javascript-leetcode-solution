/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 *
 * https://leetcode-cn.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (58.20%)
 * Likes:    286
 * Dislikes: 0
 * Total Accepted:    51.9K
 * Total Submissions: 89.2K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 
 * 
 * 进阶：
 * 
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 8 -> 0 -> 7
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
    if (!l1) return l2;
    if (!l2) return l1;
    const stack1: number[] = [];
    const stack2: number[] = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let carr = 0;
    let head: ListNode | null = null;
    while (stack1.length || stack2.length || carr) {
        let a = 0;
        let b = 0;
        if (stack1.length) a = stack1.pop()!;
        if (stack2.length) b = stack2.pop()!;
        let sum = a + b + carr;
        carr = Math.floor(sum / 10);
        let cur = new ListNode(sum % 10);
        cur.next = head;
        head = cur;
    }
    return head;
};
// @lc code=end

