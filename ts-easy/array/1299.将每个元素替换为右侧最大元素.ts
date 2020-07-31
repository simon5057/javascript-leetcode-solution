/*
 * @lc app=leetcode.cn id=1299 lang=typescript
 *
 * [1299] 将每个元素替换为右侧最大元素
 *
 * https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/description/
 *
 * algorithms
 * Easy (77.45%)
 * Likes:    36
 * Dislikes: 0
 * Total Accepted:    15.4K
 * Total Submissions: 19.9K
 * Testcase Example:  '[17,18,5,4,6,1]'
 *
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 * 
 * 完成所有替换操作后，请你返回这个数组。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr = [17,18,5,4,6,1]
 * 输出：[18,6,6,6,1,-1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 * 
 * 
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
    let copyArr = Array.from(arr);
    let curMax = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        copyArr[i] = curMax;
        curMax = Math.max(curMax, arr[i]);
    }
    copyArr[copyArr.length - 1] = -1;
    return copyArr;
};
// @lc code=end

