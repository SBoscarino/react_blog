import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Layout from './components/Layout.js';
import PostList from './components/PostList.js';
import CreatePost from './components/CreatePost.js';
import Home from './components/Home.js';


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/PostList" component={PostList}/>
        <Route path="/CreatePost" component={CreatePost}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
