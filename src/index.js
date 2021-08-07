import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';

import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css'
import {userActions} from "./redux/actions";

store.dispatch(userActions.fetchUserData())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

