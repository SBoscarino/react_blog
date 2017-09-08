import React, { Component } from 'react';
import CreatePost from './CreatePost.js';
import '../style/createPost.css';

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

  getpostdetail() {

  }

  render(){
    return(
      <div className="postContainer">
        <h1>All Posts</h1>
          {this.state.allPosts.map((post, i) => {
            return(
              <div key={i}>
                <h1 Link={'./ShowPost/{post._id}'}>{post.title}</h1>
              </div>
            )
          })}
      </div>
    );
  }
}
export default PostList;
