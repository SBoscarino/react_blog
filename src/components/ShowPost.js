import React, { Component } from 'react';
import PostList from './PostList.js';
import '../style/showPost.css';


class ShowPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      allPosts: {}
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    console.log("id", id)

    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
    .then(results => {
      console.log("YOYOYOYOYOYOYOYOYO", results);
      return results.json();
    }).then(data => {
      console.log('data in component did mount', data);
      this.setState({allPosts: data});
    })
  }

  render(){
    console.log("YOYOYO",this.state);
    return(
      <div>
        <h1 className="postHeader">Post Detail</h1>
        <div className="single">
          <div className="title">{this.state.allPosts.title}</div>
          <div className="author">{this.state.allPosts.author}</div>
          <div className="blogbody">{this.state.allPosts.blog}</div>
        </div>
      </div>
    );
  }
}
export default ShowPost;
