import React, { Component } from 'react';
import CreatePost from './CreatePost.js';


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
      console.log(data);
      this.setState({allPosts: data});
    })
  }

  render(){
    return(
      <div className="postContainer">
        <h1>All Posts</h1>
          {this.state.allPosts.map((post, i) => {
            return(
              <div key={i}>
                <h1>{post.title}</h1>
                <h2>{post.author}</h2>
                <h3>{post.blog}</h3>
              </div>
            )
          })}
      </div>
    );
  }
}
export default PostList;
