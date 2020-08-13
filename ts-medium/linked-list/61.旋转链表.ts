/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (40.52%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    77.8K
 * Total Submissions: 192K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (k === 0) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let interval = k;
    let fast: ListNode = dummy;
    let count = 0;
    let tail: ListNode | null = null;
    function getFast() {
        while (interval--) {
            if (!fast.next) {
                tail = fast;
                break;
            }
            fast = fast.next;
            count++;
        }
    }
    getFast();
    // 如果 k 大于链表长度，重新获取快指针
    if (tail) {
        fast = dummy;
        interval = k % count;
        if (interval === 0) return head;
        getFast();
    }
    let low: ListNode = dummy;
    while (fast && fast.next) {
        fast = fast.next!;
        low = low.next!;
    }
    let res: ListNode | null = low.next;
    low.next = null;
    fast.next = dummy.next!;
    return res;
};
// @lc code=end

