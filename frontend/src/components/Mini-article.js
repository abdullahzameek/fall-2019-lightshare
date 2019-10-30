import React, { Component } from 'react';


class Miniarticle extends Component {
  
  render() {
    return (
      <div>
          <img alt = "Banner" src={this.props.imgURL} width = "300" height = "200"/>
          <h1>{this.props.title}</h1>
          <h4>By {this.props.author}</h4>
          <h4>{this.props.datePublised}</h4>
          <p>{this.props.content}</p>
      </div>
    );
  }
}

Miniarticle.defaultProps = {
    title: "Default Title",
    author: "Someone",
    datePublised: "12/12/2020",
    content: "Default Mini Article content",
    imgURL: "ASSETS/defaultBanner.png"

}

export default Miniarticle;
