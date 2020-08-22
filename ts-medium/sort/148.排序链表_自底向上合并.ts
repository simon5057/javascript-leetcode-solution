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
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    const guard = new ListNode();
    guard.next = head;
    let i = 1; // 当前归并个数
    while (i < len) {
        let pre = guard;
        cur = guard.next;
        while (cur) {
            let h1: ListNode | null = cur;
            let i1 = i;
            while (i1 && cur) {
                cur = cur.next;
                i1--;
            }
            if (i1) break;

            let h2: ListNode | null = cur;
            let i2 = i;
            while (i2 && cur) {
                cur = cur.next;
                i2--;
            }

            let c1 = i;
            let c2 = i - i2;
            while (c1 && c2) {
                if (h1!.val < h2!.val) {
                    pre.next = h1;
                    h1 = h1!.next;
                    c1--;
                } else {
                    pre.next = h2;
                    h2 = h2!.next;
                    c2--;
                }
                pre = pre.next!;
            }
            if (c1) {
                pre.next = h1;
            } else {
                pre.next = h2;
            }
            while (c1 > 0 || c2 > 0) {
                pre = pre.next!;
                c1--;
                c2--;
            }
            pre.next = cur;
        }
        i *= 2;
    }
    return guard.next;
};
// @lc code=end

