import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import SubredditStore from '../store/SubredditStore';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App SubredditStore={SubredditStore}/>);
    wrapper.render();
  })
})