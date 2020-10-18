/*
 * @lc app=leetcode.cn id=497 lang=typescript
 *
 * [497] 非重叠矩形中的随机点
 *
 * https://leetcode-cn.com/problems/random-point-in-non-overlapping-rectangles/description/
 *
 * algorithms
 * Medium (39.60%)
 * Likes:    30
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 4.3K
 * Testcase Example:  '["Solution", "pick", "pick", "pick"]\n[[[[1, 1, 5, 5]]], [], [], []]'
 *
 * 给定一个非重叠轴对齐矩形的列表 rects，写一个函数 pick 随机均匀地选取矩形覆盖的空间中的整数点。
 * 
 * 提示：
 * 
 * 
 * 整数点是具有整数坐标的点。
 * 矩形周边上的点包含在矩形覆盖的空间中。
 * 第 i 个矩形 rects [i] = [x1，y1，x2，y2]，其中 [x1，y1] 是左下角的整数坐标，[x2，y2]
 * 是右上角的整数坐标。
 * 每个矩形的长度和宽度不超过 2000。
 * 1 <= rects.length <= 100
 * pick 以整数坐标数组 [p_x, p_y] 的形式返回一个点。
 * pick 最多被调用10000次。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: 
 * ["Solution","pick","pick","pick"]
 * [[[[1,1,5,5]]],[],[],[]]
 * 输出: 
 * [null,[4,1],[4,1],[3,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: 
 * ["Solution","pick","pick","pick","pick","pick"]
 * [[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
 * 输出: 
 * [null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
 * 
 * 
 * 
 * 输入语法的说明：
 * 
 * 输入是两个列表：调用的子例程及其参数。Solution 的构造函数有一个参数，即矩形数组 rects。pick
 * 没有参数。参数总是用列表包装的，即使没有也是如此。
 * 
 * 
 * 
 */

// @lc code=start
class Solution {
    private rects: number[][];
    private areas: number[] = [];
    private total: number;
    constructor(rects: number[][]) {
        this.rects = rects;
        let total = 0;
        for (const r of rects) {
            let [x1, y1, x2, y2] = r;
            total += (x2 - x1 + 1) * (y2 - y1 + 1);
            this.areas.push(total);
        }
        this.total = total;
    }

    pick(): number[] {
        let random = Math.floor(Math.random() * this.total);
        let l = 0;
        let r = this.areas.length - 1;
        while (l < r) {
            let m = Math.floor(l + (r - l) / 2);
            if (this.areas[m] <= random) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        let idx = l;
        const [x1, y1, x2, y2] = this.rects[idx];
        let width = x2 - x1 + 1;
        let area = width * (y2 - y1 + 1);
        let base = this.areas[idx] - area;
        let x = x1 + (random - base) % width;
        let y = y1 + Math.floor((random - base) / width);
        return [x, y];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end

