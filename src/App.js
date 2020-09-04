import React from "react";
import "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/ ")
      .then((resp) => resp.json())
      .then((data) => this.setState({ users: data }));
  }
  getId (e) {

  }
  render() {
    // console.log(this.state.users);
    return (
      <div className="wrapper">
        <div>
          <ul>
            {this.state.users &&
              this.state.users.map((item) => <li onClick={this.getId} key={item.id}>{item.name}</li>)}
          </ul>
        </div>
        <div>
          post block
        </div>
        <div>
          comments block
        </div>
      </div>
    );
  }
}

export default App;
