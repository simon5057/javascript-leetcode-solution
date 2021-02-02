/*
 * @lc app=leetcode.cn id=677 lang=typescript
 *
 * [677] 键值映射
 *
 * https://leetcode-cn.com/problems/map-sum-pairs/description/
 *
 * algorithms
 * Medium (61.31%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    10.8K
 * Total Submissions: 17.7K
 * Testcase Example:  '["MapSum", "insert", "sum", "insert", "sum"]\n' +
  '[[], ["apple",3], ["ap"], ["app",2], ["ap"]]'
 *
 * 实现一个 MapSum 类，支持两个方法，insert 和 sum：
 * 
 * 
 * MapSum() 初始化 MapSum 对象
 * void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键
 * key 已经存在，那么原来的键值对将被替代成新的键值对。
 * int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["MapSum", "insert", "sum", "insert", "sum"]
 * [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
 * 输出：
 * [null, null, 3, null, 5]
 * 
 * 解释：
 * MapSum mapSum = new MapSum();
 * mapSum.insert("apple", 3);  
 * mapSum.sum("ap");           // return 3 (apple = 3)
 * mapSum.insert("app", 2);    
 * mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * key 和 prefix 仅由小写英文字母组成
 * 1 
 * 最多调用 50 次 insert 和 sum
 * 
 * 
 */

// @lc code=start
class MapSum {
    public prefixMap: Map<string, number>;
    public map: Map<string, number>;

    constructor() {
        this.prefixMap = new Map();
        this.map = new Map();
    }

    insert(key: string, val: number): void {
        let last = this.map.get(key) || 0;
        if (last === val) return;
        const diff = val - last;
        let s = '';
        for (const k of key) {
            s += k;
            this.prefixMap.set(s, (this.prefixMap.get(s) || 0) + diff);
        }
        this.map.set(key, val);
    }

    sum(prefix: string): number {
        return this.prefixMap.get(prefix) || 0;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

