import { Component } from "react";

class UserDetailsChild extends Component {
  constructor (props) {
    super(props);
    console.log(this.props.props.name + 'inner child constructor');
  }

  componentDidMount() {
    console.log(this.props.props.name + 'inner child CDMount')
  }

  componentDidUpdate() {
    console.log(this.props.props.name + 'inner child CDUpdate')
  }

  componentWillUnmount() {
    console.log(this.props.props.name + 'inner child CWUnMount')
  }

  render() {
    console.log(this.props.props.name + 'inner child render')
    return (
      <div>
        Inner Child
      </div>
    )
  }
}

export default UserDetailsChild;