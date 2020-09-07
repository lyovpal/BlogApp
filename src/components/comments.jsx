import React from "react";
import "../styles/comment.css";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.comment &&
          this.props.comment.map((item) => <li key={item.id}> {item.name}</li>)}
      </div>
    );
  }
}

export default Comments;
