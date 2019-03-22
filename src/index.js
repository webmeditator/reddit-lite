import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import SubredditStore from './store/SubredditStore';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData(en);
addLocaleData(es);

const Root = (
    <Provider SubredditStore={SubredditStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('app'));
