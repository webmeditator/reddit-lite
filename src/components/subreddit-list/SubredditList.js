import React, {Component} from 'react';
import styles from './SubredditList.css';
import SubredditPost from '../subreddit-post/SubredditPost';

class SubredditList extends Component {    
    render() {
        const list = this.props.subreddits || [];
        return(
            <div className={styles.subredditList}>
                {
                    
                    list.map((item, index) => {
                        return <SubredditPost key={index} data={item.data} />
                    })                
                }

            </div>
        )
    }
}

export default SubredditList;