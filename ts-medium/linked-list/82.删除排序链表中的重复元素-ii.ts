/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (48.84%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    60.3K
 * Total Submissions: 123.4K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head;
    const dummy: ListNode = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    let curVal = head.val;
    while (cur.next) {
        let count = 0;
        while (cur.next && cur.next.val === curVal) {
            cur = cur.next;
            count++;
        }
        if (count > 0) {
            pre.next = cur.next;
        } else {
            pre.next = cur;
            pre = cur;
        }
        if (cur.next) {
            cur = cur.next;
            curVal = cur.val;
        }
    }
    return dummy.next;
};
// @lc code=end

