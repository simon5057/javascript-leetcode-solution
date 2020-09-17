/*
 * @lc app=leetcode.cn id=385 lang=typescript
 *
 * [385] 迷你语法分析器
 *
 * https://leetcode-cn.com/problems/mini-parser/description/
 *
 * algorithms
 * Medium (39.68%)
 * Likes:    42
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 11.1K
 * Testcase Example:  '"324"'
 *
 * 给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。
 * 
 * 列表中的每个元素只可能是整数或整数嵌套列表
 * 
 * 提示：你可以假定这些字符串都是格式良好的：
 * 
 * 
 * 字符串非空
 * 字符串不包含空格
 * 字符串只包含数字0-9、[、-、,、]
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 给定 s = "324",
 * 
 * 你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
 * 
 * 
 * 示例 2：
 * 
 * 给定 s = "[123,[456,[789]]]",
 * 
 * 返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
 * 
 * 1. 一个 integer 包含值 123
 * 2. 一个包含两个元素的嵌套列表：
 * ⁠   i.  一个 integer 包含值 456
 * ⁠   ii. 一个包含一个元素的嵌套列表
 * ⁠        a. 一个 integer 包含值 789
 * 
 * 
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

function deserialize(s: string): NestedInteger {
    if (!s.startsWith('[')) return new NestedInteger(+s);
    const stack: NestedInteger[] = [];
    let pre = 0;
    let sign = 1;
    let isNum = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '-') {
            sign = -1;
        } else if (s[i] === '[') {
            stack.push(new NestedInteger());
        } else if (s[i] === ',' || s[i] === ']') {
            if (isNum) {
                let cur = stack[stack.length - 1];
                cur.add(new NestedInteger(pre * sign));
            }
            pre = 0;
            sign = 1;
            isNum = false;
            if (s[i] === ']' && stack.length > 1) {
                let cur = stack.pop()!;
                stack[stack.length - 1]!.add(cur);
            }
        } else {
            pre = pre * 10 + +s[i];
            isNum = true;
        }
    }
    return stack[0];
};
// @lc code=end

