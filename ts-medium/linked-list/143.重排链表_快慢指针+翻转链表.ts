/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (56.41%)
 * Likes:    281
 * Dislikes: 0
 * Total Accepted:    35K
 * Total Submissions: 62K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return;
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next!;
    }
    let right = slow.next;
    // 翻转后半截链表
    let pre = null;
    slow.next = null;
    while (right) {
        let temp = right.next;
        right.next = pre;
        pre = right;
        right = temp;
    }
    right = pre;
    // 遍历链表并插入
    let cur: ListNode | null = head;
    while (cur && right) {
        let rightNext: ListNode | null = right.next;
        let curNext: ListNode | null = cur.next;
        cur.next = right;
        right.next = curNext;

        cur = curNext;
        right = rightNext;
    }
};
// @lc code=end

