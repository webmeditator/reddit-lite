import { autorun, observable, action } from 'mobx';

class SubredditStore {
    @observable searchedSubreddit = '';
    @observable subreddits = [];
    @observable isLoading = true;
    @observable noDataFound = false;
    @observable selectedLang = 'en';

    @action changeLanguage(event) {
      this.selectedLang = event.target.value;
    }

    @action fetchSubReddits(subReddit) {
        const subR = subReddit || `aww`;
        const limit = 25;
        const uri = `https://www.reddit.com/r/${subR}/new.json?limit=${limit}&sort=new`
    
        fetch(uri)
          .then(response =>  response.json())
          .then(data => {
            this.subreddits = data.data.children;
            this.searchedSubreddit = subReddit;
            this.isLoading = false;
            this.noDataFound = false;
          })
          .catch(err => {
            this.noDataFound = true;
          })
    }
}

var store = window.store = new SubredditStore

export default store;
