/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 *
 * https://leetcode-cn.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Medium (47.64%)
 * Likes:    458
 * Dislikes: 0
 * Total Accepted:    48.4K
 * Total Submissions: 101.5K
 * Testcase Example:  '"bcabc"'
 *
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * 
 * 注意：该题与 1081
 * https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
 * 相同
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "bcabc"
 * 输出："abc"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbacdcbc"
 * 输出："acdb"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
  const visited = Array.from({ length: 26 }, () => false);
  const map = Array.from({ length: 26 }, () => 0);
  for (const ch of s) {
    map[ch.charCodeAt(0) - 97]++;
  }
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let ch = s.charCodeAt(i);
    if (!visited[ch - 97]) {
      while (res.length && res.charCodeAt(res.length - 1) > ch) {
        if (map[res.charCodeAt(res.length - 1) - 97] === 0) break;
        visited[res.charCodeAt(res.length - 1) - 97] = false;
        res = res.slice(0, res.length - 1);
      }
      visited[ch - 97] = true;
      res += s[i];
    }
    map[ch - 97]--;
  }
  return res;
};
// @lc code=end

