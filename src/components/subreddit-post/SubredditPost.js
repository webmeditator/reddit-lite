import React, { Component } from 'react';
import styles from './SubredditPost.css';
import { FormattedMessage } from 'react-intl';

class SubredditPost extends Component {
  render() {
    const [authorName,,
            title,
            imageUrl,
            commentsSubUrl
          ] = [this.props.data.author_fullname,
                this.props.data.title, 
                this.props.data.url,
                this.props.data.url];
    const commentsUrl = `https://reddit.com${commentsSubUrl}`;
    let permLink = `https://reddit.com${this.props.data.permalink}`;
    let initDate = new Date(0);
    initDate.setUTCSeconds(this.props.data.created_utc);
    let timeCreated = initDate.toLocaleString();
    return (
      <div className={styles.subredditPost}>
        <div className={styles.subredditPost__created}>
          <span>Posted by </span>
          <span className={styles.authorName}>{authorName}</span>
          <span> at </span>
          <span className={styles.timeCreated}>{timeCreated}</span>
        </div>
        <div className={styles.subredditPost__headings}>
          <h2>{title}</h2>
          <a href={permLink}>{permLink}</a>
        </div>
        <div className={styles.subredditPost__image}>
          <img src={imageUrl} height='300px' />
        </div>
        <div className={styles.subredditPost__comments}>
            <a href={commentsUrl}>
              <FormattedMessage className={styles.errorMsg} id='Comments' />
            </a>
        </div>

      </div>

    )
  }
}

export default SubredditPost;