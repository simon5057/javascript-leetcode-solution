/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (50.50%)
 * Likes:    829
 * Dislikes: 0
 * Total Accepted:    92.3K
 * Total Submissions: 182.8K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 
 * 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) -
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 
 * 
 * 进阶:
 * 
 * 你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * 
 * 
 * 示例:
 * 
 * LRUCache cache = new LRUCache( 2 /* 缓存容量 *\/ );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回  1
 * cache.put(3, 3);    // 该操作会使得关键字 2 作废
 * cache.get(2);       // 返回 -1 (未找到)
 * cache.put(4, 4);    // 该操作会使得关键字 1 作废
 * cache.get(1);       // 返回 -1 (未找到)
 * cache.get(3);       // 返回  3
 * cache.get(4);       // 返回  4
 * 
 * 
 */

// @lc code=start
class LRUCache {
    private capacity: number;
    private keys: number[];
    private pool: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.keys = [];
        this.pool = new Map();
    }

    private changePriority(key: number) {
        let idx = this.keys.indexOf(key);
        this.keys.splice(idx, 1);
        this.keys.push(key);
    }
    get(key: number): number {
        if (this.pool.has(key)) {
            this.changePriority(key);
            return this.pool.get(key)!;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (!this.pool.has(key)) {
            if (this.capacity === this.keys.length) {
                let remove = this.keys.shift()!;
                this.pool.delete(remove);
            }
            this.keys.push(key);
        } else {
            this.changePriority(key);
        }
        this.pool.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

