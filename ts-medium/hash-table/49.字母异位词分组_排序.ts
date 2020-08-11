/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (63.04%)
 * Likes:    421
 * Dislikes: 0
 * Total Accepted:    95.4K
 * Total Submissions: 151.3K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const map: { [key: string]: string[] } = Object.create(null);
    for (const s of strs) {
        let cur: string = Array.prototype.sort.call(Array.from(s)).join('');
        if (!map[cur]) {
            map[cur] = [s];
        } else {
            map[cur].push(s);
        }
    }
    const res: string[][] = [];
    for (const key in map) {
        res.push(map[key]);
    }
    return res;
};
// @lc code=end

