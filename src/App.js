import React from "react";
import "./styles/styles.css";
import Posts from "./components/posts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      posts: null,
    };
    this.getId = this.getId.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/ ")
      .then((resp) => resp.json())
      .then((data) => this.setState({ users: data }));
    
  }
  getId(commentID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${commentID}/posts`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ posts: data }));
  }
  render() {
    // console.log(this.state.users);
    // console.log(this.state.posts)
    return (
      <div className="wrapper">
        <div>
          <ul>
            {this.state.users &&
              this.state.users.map((item) => (
                <li onClick={() => this.getId(item.id)} key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
        <Posts posts={this.state.posts}/>
        <div>Comments Block</div>
      </div>
    )
  }
}

export default App;
