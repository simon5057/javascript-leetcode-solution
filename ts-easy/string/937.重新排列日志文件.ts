/*
 * @lc app=leetcode.cn id=937 lang=typescript
 *
 * [937] 重新排列日志文件
 *
 * https://leetcode-cn.com/problems/reorder-data-in-log-files/description/
 *
 * algorithms
 * Easy (56.25%)
 * Likes:    33
 * Dislikes: 0
 * Total Accepted:    5.9K
 * Total Submissions: 10.6K
 * Testcase Example:  '["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]'
 *
 * 你有一个日志数组 logs。每条日志都是以空格分隔的字串。
 * 
 * 对于每条日志，其第一个字为字母与数字混合的 标识符。
 * 
 * 
 * 除标识符之外，所有字均由小写字母组成的，称为 字母日志
 * 除标识符之外，所有字均由数字组成的，称为 数字日志
 * 
 * 
 * 题目所用数据保证每个日志在其标识符后面至少有一个字。
 * 
 * 请按下述规则将日志重新排序：
 * 
 * 
 * 所有 字母日志 都排在 数字日志 之前。
 * 字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序；
 * 数字日志 应该按原来的顺序排列。
 * 
 * 
 * 返回日志的最终顺序。
 * 
 * 
 * 
 * 示例 ：
 * 
 * 输入：["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * 输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= logs.length <= 100
 * 3 <= logs[i].length <= 100
 * logs[i] 保证有一个标识符，并且标识符后面有一个字。
 * 
 * 
 */

// @lc code=start
function reorderLogFiles(logs: string[]): string[] {
    const letters: string[] = [];
    const nums: string[] = [];
    for (let i = 0; i < logs.length; i++) {
        let logArr = logs[i].split(' ');
        if (!Number.isNaN(Number(logArr[1]))) {
            nums.push(logs[i])
        } else {
            letters.push(logs[i]);
        }
    }

    letters.sort((a, b) => {
        let i = a.indexOf(' ');
        let j = b.indexOf(' ');
        let a1 = a.substring(0, i);
        let a2 = a.substring(i + 1);
        let b1 = b.substring(0, j);
        let b2 = b.substring(j + 1);

        if (a2 === b2) {
            return a1.localeCompare(b1);
        } else {
            return a2.localeCompare(b2);
        }
    })
    return [...letters, ...nums];
};
// @lc code=end

