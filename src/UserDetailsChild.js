import { Component } from "react";

class UserDetailsChild extends Component {
  constructor (props) {
    super(props);
    console.log('inner child constructor');
  }

  componentDidMount() {
    console.log('inner child componentdidmount')
  }

  componentWillUnmount() {
    console.log('inner child CWUM')
  }

  render() {
    console.log('inner child render')
    return (
      <div>
        Inner Child
      </div>
    )
  }
}

export default UserDetailsChild;