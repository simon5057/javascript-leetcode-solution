/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (66.78%)
 * Likes:    698
 * Dislikes: 0
 * Total Accepted:    84.6K
 * Total Submissions: 126.6K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 
 * 示例 1:
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2:
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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

function sortList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next!;
    }
    if (fast === slow) return fast;
    if (slow.next === null) {
        head.next = null;
        return merge(head, slow);
    }
    let right = sortList(slow.next);
    slow.next = null;
    let left = sortList(head);
    return merge(left, right);
};

function merge(left: ListNode | null, right: ListNode | null) {
    let guard = new ListNode();
    let cur = guard;
    while (left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    if (left) cur.next = left;
    if (right) cur.next = right;
    return guard.next;
}
// @lc code=end

