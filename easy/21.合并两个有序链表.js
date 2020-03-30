/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let cur1 = l1,
        cur2 = l2;
    let preHead = new ListNode();
    let cur = preHead;
    while (cur1 && cur2) {
        if (cur1.val < cur2.val) {
            cur.next = cur1;
            cur = cur.next;
            cur1 = cur1.next;
        } else {
            cur.next = cur2;
            cur = cur.next;
            cur2 = cur2.next;
        }
    }
    if (cur1) {
        cur.next = cur1;
    }
    if (cur2) {
        cur.next = cur2;
    }
    return preHead.next;
};
// @lc code=end