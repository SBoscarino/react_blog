import React, { Component } from 'react';
import PostList from './PostList.js';
import '../style/addpost.css';


class CreatePost extends Component {
  constructor(){
    super();

    this.state = {
      allPosts: [],
      author: '',
      blog: '',
      title: ''
    }
  }

  //Handle inputs on user change.
  handleAuthor(e){
    this.setState({author: e.target.value});
  }
  handleBody(e){
    this.setState({blog: e.target.value});
  }
  handleTitle(e){
    this.setState({title: e.target.value});
  }


  //Handle posting on submit button click.
  addPost(e){
    let postHolder = this.state.allPosts;
    e.preventDefault();
    postHolder.push({author: this.state.author, blog: this.state.blog, title: this.state.title, });
    console.log("postHolder in addPost", postHolder);

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: 'post', body: JSON.stringify()
    }).then(function(response){
      return response.json();
    }).then(function(data) {
      console.log('you are posting', data)
    })
    this.setState({author: '', blog: '', title: '', allPosts: postHolder});
  }

  render(){
    return(
      <div>
        <h1 className="postHeader">Create A Post</h1>
        <div className="containerFormContainer">
        <div className="formContainer">
          <form className="form">
            <h2>Author:</h2>
            <input type="text" placeholder="author name" name="author" onChange={(e) => this.handleAuthor(e)} value={this.state.author}/>
            <h2>Body of Post:</h2>
            <input type="text" placeholder="post body" name="blog" onChange={(e) => this.handleBody(e)} value={this.state.blog}/>
            <h2>Title:</h2>
            <input type="text" placeholder="title of post" name="title" onChange={(e) => this.handleTitle(e)} value={this.state.title}/>
          </form>
            <button onClick={(e) => this.addPost(e)}>Submit Your Post!</button>
        </div>
        </div>
      </div>
    );
  }
}
export default CreatePost;
