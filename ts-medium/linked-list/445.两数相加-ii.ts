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
    const list1: number[] = [];
    const list2: number[] = [];
    let c1: ListNode | null = l1;
    while (c1) {
        list1.push(c1.val);
        c1 = c1.next;
    }
    let c2: ListNode | null = l2;
    while (c2) {
        list2.push(c2.val);
        c2 = c2.next;
    }

    let head: ListNode | null = null;
    let carr = 0;
    let i = list1.length - 1;
    let j = list2.length - 1;
    while (j >= 0 && i >= 0) {
        let sum = list1[i] + list2[j] + carr;
        carr = Math.floor(sum / 10);
        changeHead(sum % 10);
        i--;
        j--;
    }
    while (i >= 0) {
        let sum = list1[i] + carr;
        carr = Math.floor(sum / 10);
        changeHead(sum % 10);
        i--;
    }
    while (j >= 0) {
        let sum = list2[j] + carr;
        carr = Math.floor(sum / 10);
        changeHead(sum % 10);
        j--;
    }
    if (carr) changeHead(carr);
    function changeHead(val: number) {
        let cur = new ListNode(val);
        cur.next = head;
        head = cur;
    }
    return head;
};
// @lc code=end

