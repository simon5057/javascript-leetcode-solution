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
    const dummy: ListNode = new ListNode();
    dummy.next = head;
    let pre: ListNode = dummy;
    for (let i = 0; i < m - 1; i++) {
        pre = pre.next!;
    }
    let cur: ListNode = pre.next!;
    for (let i = m; i < n; i++) {
        // 将下一个需要旋转的元素抽出，放在 pre 之后
        let temp = cur.next!;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummy.next;
};
// @lc code=end