/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (51.86%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    14.5K
 * Total Submissions: 28K
 * Testcase Example:  '0'
 *
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。
 * 
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 * 
 * 
 * 
 * 例如，上面的二进制手表读取 “3:25”。
 * 
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
 * "0:32"]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
 * 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
const nums = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
const visited = Array.from(nums).fill(0);

var readBinaryWatch = function (num) {
    const res = [];
    dfs(res, num, 0, 0);
    return res;
};

function dfs(res, num, step, start) {
    if (num === step) {
        let {
            h,
            m
        } = handle_data(visited);
        return res.push(m < 10 ? (h + ':0' + m) : (h + ':' + m));
    } else {
        for (let i = start; i < nums.length; i++) {
            visited[i] = 1;
            let {
                h,
                m
            } = handle_data(visited);
            if (h < 12 && m < 60) {
                dfs(res, num, step + 1, i + 1);
            }
            visited[i] = 0;
        }
    }
}

function handle_data(visited) {
    let h = 0;
    let m = 0;
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 0) {
            continue;
        } else if (i < 4) {
            h += nums[i];
        } else {
            m += nums[i];
        }
    }
    return {
        h,
        m
    };
}
// @lc code=end