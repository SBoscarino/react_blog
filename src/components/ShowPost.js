import React, { Component } from 'react';
import PostList from './PostList.js';
import '../style/showPost.css';


class ShowPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      allPosts: [],
      author: '',
      blog: '',
      title: ''
    }
  }


  render(){
    return(
      <div>
        <h1 className="postHeader">Post Detail</h1>
        <div className="postContainer">
        {this.props.data.map((index, post) => {
          <div>
            <div className="author">{post.author}</div>
            <div className="blogbody">{post.blog}</div>
            <div className="title">{post.title}</div>
          </div>
        })}
        </div>
      </div>
    );
  }
}
export default ShowPost;
