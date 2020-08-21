/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (47.38%)
 * Likes:    635
 * Dislikes: 0
 * Total Accepted:    85K
 * Total Submissions: 179.5K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 说明：
 * 
 * 
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 * 
 * 
 * 示例 2：
 * 
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 * 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 * 
 * 
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    const set = new Set();
    let maxLen = 0;
    for (const w of wordDict) {
        set.add(w);
        maxLen = Math.max(maxLen, w.length);
    }
    let len = s.length;
    const queue: number[] = [0];
    while (queue.length) {
        let start = queue.shift()!;
        if (start === len) return true;
        for (let i = start; i < len; i++) {
            if (i - start > maxLen - 1) break;
            let word = s.substring(start, i + 1);
            if (set.has(word)) {
                queue.push(i + 1);
            }
        }
    }
    return false;
};
// @lc code=end

