import React, { Component } from 'react';
import SubredditList from './subreddit-list/SubredditList';
import SubredditForm from './subreddit-form/SubredditForm';
import styles from './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { inject, observer } from 'mobx-react';
import messages from '../i18n/messages';

@inject('SubredditStore')
@observer
class App extends Component {  

  componentDidMount() {
    const SubredditStore = this.props.SubredditStore;
    SubredditStore.fetchSubReddits(SubredditStore.searchedSubreddit);
    setInterval(() => {
      SubredditStore.fetchSubReddits(SubredditStore.searchedSubreddit);
    }, 60000);
  }

  render() {
    const SubredditStore = this.props.SubredditStore;
    const lang = SubredditStore.selectedLang;
    let errorMsg = SubredditStore.noDataFound ? <FormattedMessage className={styles.errorMsg} id='Oops! no results found' /> : <p></p>;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <React.Fragment>
          {
            !this.props.SubredditStore.isLoading? 
            (              
              <div>
                <SubredditForm fetchNewData={SubredditStore.fetchSubReddits.bind(this)} SubredditStore={SubredditStore} />
                {errorMsg}                
                <SubredditList subreddits={SubredditStore.subreddits} SubredditStore={SubredditStore} />
              </div>            
            ) :
            (
              <h3 className={styles.loading__data}>Loading Posts ...</h3>
            )
          }
        </React.Fragment>
        </IntlProvider>
      )        
  }
}

export default App;