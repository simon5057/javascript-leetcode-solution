/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 *
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (68.53%)
 * Likes:    387
 * Dislikes: 0
 * Total Accepted:    52K
 * Total Submissions: 75.8K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 示例:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");   
 * trie.search("app");     // 返回 true
 * 
 * 说明:
 * 
 * 
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 * 
 * 
 */

// @lc code=start
type TrieNext = Trie | null;
class Trie {
    private isEnd = false;
    private next: TrieNext[] = Array.from({ length: 26 }, () => null);
    constructor() { }

    insert(word: string): void {
        let node: TrieNext = this;
        for (const w of word) {
            let i = w.charCodeAt(0) - 97;
            if (node!.next[i] === null) node!.next[i] = new Trie();
            node = node!.next[i];
        }
        node!.isEnd = true;
    }

    search(word: string): boolean {
        let node: TrieNext = this;
        for (const w of word) {
            let i = w.charCodeAt(0) - 97;
            node = node.next[i];
            if (node === null) return false;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node: TrieNext = this;
        for (const w of prefix) {
            let i = w.charCodeAt(0) - 97;
            node = node.next[i];
            if (node === null) return false;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

