/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (51.10%)
 * Likes:    469
 * Dislikes: 0
 * Total Accepted:    68K
 * Total Submissions: 133.1K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (m === n) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let i = 0;
    let pre: ListNode | null = null;
    let guard: ListNode = dummy;
    let tail: ListNode | null = null;
    let cur: ListNode | null = dummy;
    while (cur) {
        let next: ListNode | null = cur.next;
        if (i === m) {
            tail = cur;
            pre = tail;
        } else if (i > m && i <= n) {
            cur.next = pre;
            pre = cur;
            if (i === n) {
                tail && (tail.next = next);
                guard.next = pre;
                break;
            }
        } else {
            guard = cur;
        }
        i++;
        cur = next;
    }
    return dummy.next;
};
// @lc code=end