/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (42.33%)
 * Likes:    515
 * Dislikes: 0
 * Total Accepted:    77.3K
 * Total Submissions: 182.8K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 * 
 * 
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    const direction: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const visited: boolean[][] = Array.from(board, rows => Array.from(rows, () => false));
    let m = board.length;
    let n = board[0].length;
    function dfs(i: number, j: number, idx: number): boolean {
        if (idx === word.length - 1) return board[i][j] === word[idx];
        if (board[i][j] === word[idx]) {
            visited[i][j] = true;
            for (const [x, y] of direction) {
                let x1 = i + x;
                let y1 = j + y;
                if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n && !visited[x1][y1]) {
                    if (dfs(x1, y1, idx + 1)) return true;
                }
            }
            visited[i][j] = false;
        }
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
// @lc code=end

