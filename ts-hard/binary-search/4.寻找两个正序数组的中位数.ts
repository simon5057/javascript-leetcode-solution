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
    let len1 = nums1.length;
    let len2 = nums2.length;
    let totalLen = len1 + len2;
    if (totalLen % 2 === 1) {
        let k = totalLen >> 1;
        let mid = getMid(nums1, nums2, k + 1);
        return mid;
    } else {
        let k1 = (totalLen >> 1) - 1;
        let k2 = totalLen >> 1;
        let mid = (getMid(nums1, nums2, k1 + 1) + getMid(nums1, nums2, k2 + 1)) / 2;
        return mid;
    }
};
function getMid(nums1: number[], nums2: number[], k: number): number {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let i1 = 0;
    let i2 = 0;
    while (true) {
        if (i1 === len1) return nums2[i2 + k - 1];
        if (i2 === len2) return nums1[i1 + k - 1];
        if (k === 1) return Math.min(nums1[i1], nums2[i2]);
        let half = k >> 1;
        let newi1 = Math.min(i1 + half, len1) - 1;
        let newi2 = Math.min(i2 + half, len2) - 1;
        if (nums1[newi1] <= nums2[newi2]) {
            k -= newi1 - i1 + 1;
            i1 = newi1 + 1;
        } else {
            k -= newi2 - i2 + 1;
            i2 = newi2 + 1;
        }
    }
}
// @lc code=end

