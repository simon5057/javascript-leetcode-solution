/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (37.72%)
 * Likes:    195
 * Dislikes: 0
 * Total Accepted:    46.8K
 * Total Submissions: 124K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * 示例1:
 * 
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  const map = Array.from({ length: 26 }, () => 0);
  for (const s of s1) {
    map[s.charCodeAt(0) - 97]++;
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const cur = Array.from({ length: 26 }, () => 0);
    for (let j = i; j < s1.length + i; j++) {
      cur[s2.charCodeAt(j) - 97]++;
    }
    if (sameCompose(map, cur)) return true;
  }
  return false;
};
function sameCompose(x: number[], y: number[]): boolean {
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) return false;
  }
  return true;
}
// @lc code=end

