/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (49.09%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    74.5K
 * Total Submissions: 151.8K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是
 * "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "1111"
 * 输出：["1.1.1.1"]
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "010010"
 * 输出：["0.10.0.10","0.100.1.0"]
 * 
 * 
 * 示例 5：
 * 
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 3000
 * s 仅由数字组成
 * 
 * 
 */

// @lc code=start
class Solution {
    private count: number = 4;
    private segments: string[] = [];
    private res: string[] = [];
    dfs(s: string, start: number, idx: number) {
        // 如果已经有 4 个片段
        if (idx === this.count) {
            // 如果片段正好将 s 分完
            if (start === s.length) {
                this.res.push(this.segments.join('.'));
            }
            return;
        }
        // 如果片段不足 4 个，但 s 已经消耗完
        if (start === s.length) return;
        // 如果当前为前导 0
        if (s[start] === '0') {
            this.segments[idx] = '0';
            this.dfs(s, start + 1, idx + 1);
            return;
        }
        let seg: number = 0;
        for (let i = start; i < s.length; i++) {
            seg = seg * 10 + Number(s[i]);
            if (seg > 255) break;
            this.segments[idx] = String(seg);
            this.dfs(s, i + 1, idx + 1);
        }
    }
    restoreIpAddresses() {
        return this.res;
    }
}
function restoreIpAddresses(s: string): string[] {
    let solut = new Solution();
    solut.dfs(s, 0, 0);
    return solut.restoreIpAddresses();
};
// @lc code=end

