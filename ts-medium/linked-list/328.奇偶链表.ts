/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
 *
 * https://leetcode-cn.com/problems/odd-even-linked-list/description/
 *
 * algorithms
 * Medium (63.13%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    54.5K
 * Total Submissions: 86.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 1->3->5->2->4->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2->1->3->5->6->4->7->NULL 
 * 输出: 2->3->6->7->1->5->4->NULL
 * 
 * 说明:
 * 
 * 
 * 应当保持奇数节点和偶数节点的相对顺序。
 * 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    let cur: ListNode | null = head;
    let count = 1;
    let oddDummy = new ListNode();
    let oddPre = oddDummy;
    let evenDummy = new ListNode();
    let evenPre = evenDummy;
    while (cur) {
        if ((count & 1) === 1) {
            oddPre.next = cur;
            oddPre = oddPre.next;
        } else {
            evenPre.next = cur;
            evenPre = evenPre.next;
        }
        count++;
        let next: ListNode | null = cur.next;
        cur.next = null;
        cur = next;
    }
    oddPre.next = evenDummy.next;
    return oddDummy.next;
};
// @lc code=end

