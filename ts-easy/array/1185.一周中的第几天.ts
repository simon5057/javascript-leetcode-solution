/*
 * @lc app=leetcode.cn id=1185 lang=typescript
 *
 * [1185] 一周中的第几天
 *
 * https://leetcode-cn.com/problems/day-of-the-week/description/
 *
 * algorithms
 * Easy (60.20%)
 * Likes:    27
 * Dislikes: 0
 * Total Accepted:    6.5K
 * Total Submissions: 10.9K
 * Testcase Example:  '31\n8\n2019'
 *
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 * 
 * 输入为三个整数：day、month 和 year，分别表示日、月、年。
 * 
 * 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
 * "Friday", "Saturday"}。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：day = 31, month = 8, year = 2019
 * 输出："Saturday"
 * 
 * 
 * 示例 2：
 * 
 * 输入：day = 18, month = 7, year = 1999
 * 输出："Sunday"
 * 
 * 
 * 示例 3：
 * 
 * 输入：day = 15, month = 8, year = 1993
 * 输出："Sunday"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给出的日期一定是在 1971 到 2100 年之间的有效日期。
 * 
 * 
 */

// @lc code=start
function dayOfTheWeek(day: number, month: number, year: number): string {
    const weekdayList: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdayList[new Date(`${year}/${month}/${day}`).getDay()];
};
// @lc code=end

