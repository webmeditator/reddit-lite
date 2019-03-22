import React, { Component } from 'react';
import styles from './SubredditForm.css';
import { FormattedMessage } from 'react-intl';

class SubredditForm extends Component {
  subRValue;

  handleChange(e) {
    this.subRValue = e.target.value;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.SubredditStore.fetchSubReddits(this.subRValue);    
  }

  render() {
    const SubredditStore = this.props.SubredditStore;
    return (
      <div className={styles.subRedditForm}>
        <span><FormattedMessage className={styles.errorMsg} id='Choose language' />:  </span>
        <select className={styles.subRedditForm__selectLang} onChange={(e) => SubredditStore.changeLanguage(e)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
 
        {/* <input placeholder='Search Reddit e.g. theofficememes' className={styles.subRedditForm__search} type='text' onChange={(e) => { this.handleChange(e)}} /> */}
        <FormattedMessage id="Search Reddit" defaultMessage="Search Reddit">
        {
            placeholder => (
                <input placeholder={placeholder} className={styles.subRedditForm__search} type='text' onChange={(e) => { this.handleChange(e)}} />
            )
        }
        </FormattedMessage>
        <button className={styles.subRedditForm__searchBtn} onClick={(e) => { this.handleClick(e) }}>
          <FormattedMessage className={styles.errorMsg} id='Search' />
        </button>
      </div>
    )
  }
}

export default SubredditForm;