/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (43.22%)
 * Likes:    407
 * Dislikes: 0
 * Total Accepted:    55.4K
 * Total Submissions: 128.2K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) return 0;
    let len = beginWord.length;
    let map: Map<string, string[]> = new Map<string, string[]>();
    for (const word of wordList) {
        for (let i = 0; i < len; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1);
            if (map.get(newWord)) {
                map.get(newWord)?.push(word);
            } else {
                map.set(newWord, [word]);
            }
        }
    }
    function visitWordNode(Q: [string, number][], visited: Map<string, number>, otherVisited: Map<string, number>): number {
        let [word, level] = Q.shift()!;
        for (let i = 0; i < len; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!map.get(newWord)) continue;
            for (const nextWord of map.get(newWord)!) {
                if (otherVisited.get(nextWord)) {
                    return level + otherVisited.get(nextWord)!;
                }
                if (!visited.get(nextWord)) {
                    visited.set(nextWord, level + 1);
                    Q.push([nextWord, level + 1]);
                }
            }
        }
        return -1;
    }
    const beginQueue: [string, number][] = [[beginWord, 1]];
    const endQueue: [string, number][] = [[endWord, 1]];
    const beginVisited: Map<string, number> = new Map([[beginWord, 1]])
    const endVisited: Map<string, number> = new Map([[endWord, 1]])
    while (beginQueue.length && endQueue.length) {
        let res = visitWordNode(beginQueue, beginVisited, endVisited);
        if (res > -1) return res;
        res = visitWordNode(endQueue, endVisited, beginVisited);
        if (res > -1) return res;
    }
    return 0;
};
// @lc code=end

