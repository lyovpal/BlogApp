import React from "react";
import "../styles/post.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          <h1>Posts</h1>
          {this.props.posts &&
            this.props.posts.map((item) => (
              <li
                className="posts"
                key={item.id}
                onClick={() => this.props.getComment(item.id)}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
