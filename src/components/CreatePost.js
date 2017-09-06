import React, { Component } from 'react';
import PostList from './PostList.js';


class CreatePost extends Component {
  constructor(){
    super();

    this.state = {
      allPosts: [],
      postAuthor: '',
      postBody: '',
      postTitle: ''
    }
  }

  //Handle inputs on user change.
  handleAuthor(e){
    this.setState({postAuthor: e.target.value});
  }
  handleBody(e){
    this.setState({postBody: e.target.value});
  }
  handleTitle(e){
    this.setState({postTitle: e.target.value});
  }

  //Handle posting on submit button click.
  addPost(e){
    let postHolder = this.state.allPosts;
    e.preventDefault();
    postHolder.push({postAuthor: this.state.postAuthor, postBody: this.state.postBody, postTitle: this.state.postTitle, });
    console.log("postHolder in addPost", postHolder);
    this.setState({postAuthor: '', postBody: '', postTitle: '', allPosts: postHolder});
  }

  render(){
    return(
      <div>
        <h1>Create A Post</h1>
        <div className="formContainer">
          <form className="form">
            <input type="text" placeholder="author name" name="postAuthor" onChange={(e) => this.handleAuthor(e)} value={this.state.postAuthor}/>
            <input type="text" placeholder="post body" name="postBody" onChange={(e) => this.handleBody(e)} value={this.state.postBody}/>
            <input type="text" placeholder="title of post" name="postTitle" onChange={(e) => this.handleTitle(e)} value={this.state.postTitle}/>
          </form>
            <button onClick={(e) => this.addPost(e)}>Submit Your Post!</button>
        </div>
      </div>
    );
  }
}
export default CreatePost;
