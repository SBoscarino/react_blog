import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost.js';
import '../style/postList.css';

class PostList extends Component {
  constructor(){
    super();

    this.state = {
      allPosts: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('data in component did mount', data);
      this.setState({allPosts: data});
    })
  }

  render(){
    return(
      <div className="postContainer">
        <h1>All Posts</h1>
          {this.state.allPosts.map((post, i) => {
            return(
              <div className="titles" key={i}>
                <Link to={`/ShowPost/` + post._id}>{post.title}</Link>
              </div>
            )
          })}
      </div>
    );
  }
}
export default PostList;
