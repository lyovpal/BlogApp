import React from "react";
import "../styles/post.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map((item) => <li key={item.id} className='textDecoration'> {item.title} </li>)}
      </div>
    );
  }
}

export default Posts;
