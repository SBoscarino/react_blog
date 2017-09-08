import React, { Component } from 'react';
import PostList from './PostList.js';
import '../style/addpost.css';


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
        <div className="containerFormContainer">
        <div className="formContainer">
        {this.props.data.map((index, post) => {
          <div>
            <div>{post.author}</div>
            <div>{post.blog}</div>
            <div>{post.title}</div>
          </div>
        })}
        </div>
        </div>
      </div>
    );
  }
}
export default ShowPost;
