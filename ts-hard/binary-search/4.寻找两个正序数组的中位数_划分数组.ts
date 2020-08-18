/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (38.40%)
 * Likes:    2949
 * Dislikes: 0
 * Total Accepted:    228.7K
 * Total Submissions: 595.2K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = m;
    let mid1 = 0;
    let mid2 = 0;
    while (left <= right) {
        let i = (left + right) >> 1;
        let j = ((m + n + 1) >> 1) - i;
        let pre1 = i === 0 ? -Infinity : nums1[i - 1];
        let n1 = i === m ? Infinity : nums1[i];
        let pre2 = j === 0 ? -Infinity : nums2[j - 1];
        let n2 = j === n ? Infinity : nums2[j];
        if (pre1 <= n2) {
            mid1 = Math.max(pre1, pre2);
            mid2 = Math.min(n1, n2);
            left = i + 1;
        } else {
            right = i - 1;
        }
    }
    return (m + n) % 2 === 0 ? (mid1 + mid2) / 2 : mid1;
};
// @lc code=end

