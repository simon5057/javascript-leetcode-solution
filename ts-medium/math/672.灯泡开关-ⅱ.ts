/*
 * @lc app=leetcode.cn id=672 lang=typescript
 *
 * [672] 灯泡开关 Ⅱ
 *
 * https://leetcode-cn.com/problems/bulb-switcher-ii/description/
 *
 * algorithms
 * Medium (55.75%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    2.6K
 * Total Submissions: 4.7K
 * Testcase Example:  '1\n1'
 *
 * 现有一个房间，墙上挂有 n 只已经打开的灯泡和 4 个按钮。在进行了 m 次未知操作后，你需要返回这 n 只灯泡可能有多少种不同的状态。
 * 
 * 假设这 n 只灯泡被编号为 [1, 2, 3 ..., n]，这 4 个按钮的功能如下：
 * 
 * 
 * 将所有灯泡的状态反转（即开变为关，关变为开）
 * 将编号为偶数的灯泡的状态反转
 * 将编号为奇数的灯泡的状态反转
 * 将编号为 3k+1 的灯泡的状态反转（k = 0, 1, 2, ...)
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 1, m = 1.
 * 输出: 2
 * 说明: 状态为: [开], [关]
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 2, m = 1.
 * 输出: 3
 * 说明: 状态为: [开, 关], [关, 开], [关, 关]
 * 
 * 
 * 示例 3:
 * 
 * 输入: n = 3, m = 1.
 * 输出: 4
 * 说明: 状态为: [关, 开, 关], [开, 关, 开], [关, 关, 关], [关, 开, 开].
 * 
 * 
 * 注意： n 和 m 都属于 [0, 1000].
 * 
 */

// @lc code=start
function flipLights(n: number, m: number): number {
  const set = new Set();
  n = Math.min(n, 6);
  let shift = Math.max(0, 6 - n);
  for (let i = 0; i < 16; ++i) {
    let bitCount = i.toString(2).replace(/0/g, '').length;
    if (bitCount % 2 == m % 2 && bitCount <= m) {
      let lights = 0;
      if (((i >> 0) & 1) > 0) lights ^= (0b111111 >> shift);
      if (((i >> 1) & 1) > 0) lights ^= (0b010101 >> shift);
      if (((i >> 2) & 1) > 0) lights ^= (0b101010 >> shift);
      if (((i >> 3) & 1) > 0) lights ^= (0b100100 >> shift);
      set.add(lights);
    }
  }
  return set.size;
};
// @lc code=end

