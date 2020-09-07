import React from "react";
import "./styles/styles.css";
import Posts from "./components/posts";
import Comments from "./components/comments";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      posts: null,
      comments: null
    };
    this.getPosts = this.getPosts.bind(this);
    this.getcomments = this.getcomments.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/ ")
      .then((resp) => resp.json())
      .then((data) => this.setState({ users: data }));
  }

  getPosts(postID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${postID}/posts`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ posts: data }));
  }
  getcomments(commentID) {
   
    fetch(`https://jsonplaceholder.typicode.com/posts/${commentID}/comments`)
    .then((resp) => resp.json())
    .then((data) => this.setState({ comments: data }));
  }
  render() {
    // console.log(this.state.users);
    // console.log(this.state.posts)
    // console.log(this.state.comments)
    return (
      <div className="wrapper">
        <div>
          <ul>
            {this.state.users &&
              this.state.users.map((item) => (
                <li onClick={() => this.getPosts(item.id)} key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
        <Posts posts={this.state.posts} getComment={this.getcomments}/>
        <Comments comment={this.state.comments} />
      </div>
    );
  }
}

export default App;
