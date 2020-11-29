/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 *
 * https://leetcode-cn.com/problems/design-circular-deque/description/
 *
 * algorithms
 * Medium (53.23%)
 * Likes:    64
 * Dislikes: 0
 * Total Accepted:    13.3K
 * Total Submissions: 25K
 * Testcase Example:  '["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]'
 *
 * 设计实现双端队列。
 * 你的实现需要支持以下操作：
 * 
 * 
 * MyCircularDeque(k)：构造函数,双端队列的大小为k。
 * insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 * insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 * deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 * deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 * getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 * getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 * isEmpty()：检查双端队列是否为空。
 * isFull()：检查双端队列是否满了。
 * 
 * 
 * 示例：
 * 
 * MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
 * circularDeque.insertLast(1);                    // 返回 true
 * circularDeque.insertLast(2);                    // 返回 true
 * circularDeque.insertFront(3);                    // 返回 true
 * circularDeque.insertFront(4);                    // 已经满了，返回 false
 * circularDeque.getRear();                  // 返回 2
 * circularDeque.isFull();                        // 返回 true
 * circularDeque.deleteLast();                    // 返回 true
 * circularDeque.insertFront(4);                    // 返回 true
 * circularDeque.getFront();                // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 所有值的范围为 [1, 1000]
 * 操作次数的范围为 [1, 1000]
 * 请不要使用内置的双端队列库。
 * 
 * 
 */

// @lc code=start
class MyCircularDeque {
    private capacity: number;
    private list: number[];
    private front: number = 0;
    private rear: number = 0;
    constructor(k: number) {
        this.capacity = k + 1;
        this.list = Array.from({ length: this.capacity });
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false;
        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.list[this.front] = value;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false;
        this.list[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false;
        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false;
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        return true;
    }

    getFront(): number {
        if (this.isEmpty()) return -1;
        return this.list[this.front];
    }

    getRear(): number {
        if (this.isEmpty()) return -1;
        return this.list[(this.rear - 1 + this.capacity) % this.capacity];
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.capacity === this.front;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

