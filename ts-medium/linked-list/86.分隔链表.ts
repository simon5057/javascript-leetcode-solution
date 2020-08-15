/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (59.27%)
 * Likes:    241
 * Dislikes: 0
 * Total Accepted:    48.1K
 * Total Submissions: 81.2K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return head;
    let before: ListNode = new ListNode();
    let beforeTail: ListNode = before;
    let after: ListNode = new ListNode();
    let afterTail: ListNode = after;
    let cur: ListNode | null = head;
    while (cur) {
        if (cur.val < x) {
            beforeTail.next = cur;
            beforeTail = cur;
        } else {
            afterTail.next = cur;
            afterTail = cur;
        }
        cur = cur.next;
        beforeTail.next = null;
        afterTail.next = null;
    }
    beforeTail.next = after.next;
    return before.next;
};
// @lc code=end

