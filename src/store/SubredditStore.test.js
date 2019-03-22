import SubredditStore from './SubredditStore';

describe('SubredditStore', () => {
    const store = SubredditStore;
    it('should have default sub reddits', () => {
        expect(store.subreddits).toEqual([]);
    })
})