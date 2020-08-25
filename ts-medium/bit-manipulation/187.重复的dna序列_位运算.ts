/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 *
 * https://leetcode-cn.com/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (45.18%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    21.8K
 * Total Submissions: 48.1K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA
 * 中的重复序列有时会对研究非常有帮助。
 * 
 * 编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出：["AAAAACCCCC", "CCCCCAAAAA"]
 * 
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
    const len = 10;
    if (s.length <= len) return [];
    const map: { [key: string]: number } = { A: 0, C: 1, G: 2, T: 3 };
    const set = new Set<number>();
    const res = new Set<string>();
    let bitmask = 0;
    for (let i = 0; i < len; i++) {
        bitmask <<= 2;
        bitmask |= map[s[i]];
    }
    set.add(bitmask);
    for (let i = 1; i < s.length - len + 1; i++) {
        bitmask <<= 2;
        bitmask |= map[s[i + len - 1]];
        bitmask &= ~(3 << (2 * len));
        if (!set.has(bitmask)) {
            set.add(bitmask);
        } else {
            res.add(s.substr(i, len));
        }
    }
    return Array.from(res.values());
};
// @lc code=end

