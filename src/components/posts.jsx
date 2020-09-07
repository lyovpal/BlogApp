import React from "react";
import "../styles/post.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.posts)
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map((item) => (
            <div
              key={item.id}
              className="textDecoration"
              onClick={() => this.props.getComment(item.id)}
            >
              {item.title}
            </div>
          ))}
      </div>
    );
  }
}

export default Posts;
