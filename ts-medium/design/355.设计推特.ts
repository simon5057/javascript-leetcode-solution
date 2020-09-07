/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 *
 * https://leetcode-cn.com/problems/design-twitter/description/
 *
 * algorithms
 * Medium (41.20%)
 * Likes:    158
 * Dislikes: 0
 * Total Accepted:    17.3K
 * Total Submissions: 41.9K
 * Testcase Example:  '["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]'
 *
 * 
 * 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：
 * 
 * 
 * postTweet(userId, tweetId): 创建一条新的推文
 * getNewsFeed(userId):
 * 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
 * follow(followerId, followeeId): 关注一个用户
 * unfollow(followerId, followeeId): 取消关注一个用户
 * 
 * 
 * 示例:
 * 
 * 
 * Twitter twitter = new Twitter();
 * 
 * // 用户1发送了一条新推文 (用户id = 1, 推文id = 5).
 * twitter.postTweet(1, 5);
 * 
 * // 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
 * twitter.getNewsFeed(1);
 * 
 * // 用户1关注了用户2.
 * twitter.follow(1, 2);
 * 
 * // 用户2发送了一个新推文 (推文id = 6).
 * twitter.postTweet(2, 6);
 * 
 * // 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
 * // 推文id6应当在推文id5之前，因为它是在5之后发送的.
 * twitter.getNewsFeed(1);
 * 
 * // 用户1取消关注了用户2.
 * twitter.unfollow(1, 2);
 * 
 * // 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
 * // 因为用户1已经不再关注用户2.
 * twitter.getNewsFeed(1);
 * 
 * 
 */

// @lc code=start
type Tweets = number[];
type Users = {
    [key: number]: {
        tweets: number[];
        follows: number[];
    }
}
class Twitter {
    private tweets: Tweets = [];
    private users: Users = {};
    constructor() { }

    postTweet(userId: number, tweetId: number): void {
        if (!this.users[userId]) {
            this.users[userId] = { tweets: [], follows: [] };
        }
        let idx = this.tweets.push(tweetId) - 1;
        this.users[userId].tweets.unshift(idx);
    }

    getNewsFeed(userId: number): number[] {
        if (!this.users[userId]) return [];
        const cur = this.users[userId];
        const tweets = cur.follows.map(f => Array.from(this.users[f].tweets).slice(0, 10));
        tweets.unshift(Array.from(cur.tweets).slice(0, 10));
        let res: number[] = tweets.reduce((pre, cur) => pre.concat(cur), []).sort((a, b) => b - a);
        return res.slice(0, 10).map(v => this.tweets[v]);
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.users[followerId]) {
            this.users[followerId] = { tweets: [], follows: [] };
        }
        if (!this.users[followeeId]) {
            this.users[followeeId] = { tweets: [], follows: [] };
        }
        if (followerId === followeeId) return;
        if (this.users[followerId].follows.includes(followeeId)) return;
        this.users[followerId].follows.push(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (!this.users[followerId]) {
            this.users[followerId] = { tweets: [], follows: [] };
        }
        let idx = this.users[followerId].follows.findIndex(v => followeeId === v);
        if (~idx) this.users[followerId].follows.splice(idx, 1);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

