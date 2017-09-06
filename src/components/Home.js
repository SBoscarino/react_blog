import React, { Component } from 'react';
import '../style/home.css';

class Home extends Component {

  render(){
    return(
      <div>
        <h1 className="homeheader">Welcome To This React Blog</h1>
        <div className="headerImage"><img alt="succulent background" src="http://www.ruffledfeathersevents.com/wp-content/uploads/2016/09/40574-succulents-nature-plants.jpg" /></div>
      </div>

    )
  }
}
export default Home;
