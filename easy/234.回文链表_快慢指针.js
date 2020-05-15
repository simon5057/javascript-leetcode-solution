/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (41.27%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    85.4K
 * Total Submissions: 204.8K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head == null) return true;
    let endHalf = getEndHalf(head);
    let last = reverse(endHalf.next);

    let res = true;
    let p1 = head;
    let p2 = last;
    while (res && p2 != null) {
        if (p1.val != p2.val) res = false;
        p1 = p1.next;
        p2 = p2.next;
    }
    return res;
};

function getEndHalf(head) {
    let fast = head;
    let low = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        low = low.next;
    }
    return low;
}

function reverse(head) {
    let cur = head;
    let pre = null;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}
// @lc code=end