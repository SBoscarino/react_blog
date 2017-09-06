import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/home.css';


class Layout extends Component {
render(){
  return(
    <div>
      <nav className="navbar">
        <div><NavLink activeClassName="active" to="/Home">Bloggo</NavLink></div>
        <div><NavLink activeClassName="active" to="/CreatePost">Create A Post</NavLink></div>
        <div><NavLink activeClassName="active" to="/PostList">See All Posts</NavLink></div>
      </nav>
      <div className="home-section">
        {this.props.children}
      </div>
    </div>
  )
}
}
export default Layout;
