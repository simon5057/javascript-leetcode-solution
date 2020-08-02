/*
 * @lc app=leetcode.cn id=1360 lang=typescript
 *
 * [1360] 日期之间隔几天
 *
 * https://leetcode-cn.com/problems/number-of-days-between-two-dates/description/
 *
 * algorithms
 * Easy (47.55%)
 * Likes:    25
 * Dislikes: 0
 * Total Accepted:    4.9K
 * Total Submissions: 10.3K
 * Testcase Example:  '"2019-06-29"\n"2019-06-30"'
 *
 * 请你编写一个程序来计算两个日期之间隔了多少天。
 * 
 * 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：date1 = "2019-06-29", date2 = "2019-06-30"
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 输入：date1 = "2020-01-15", date2 = "2019-12-31"
 * 输出：15
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定的日期是 1971 年到 2100 年之间的有效日期。
 * 
 * 
 */

// @lc code=start
function daysBetweenDates(date1: string, date2: string): number {
    let d1 = new Date(date1).getTime();
    let d2 = new Date(date2).getTime();
    let res = (d1 - d2) / (24 * 60 * 60 * 1000);
    return Math.abs(res);
};
// @lc code=end

