import { Component } from "react";
import UserDetailsChild from "./UserDetailsChild";

class UserDetails extends Component {
  constructor (props) {
    super(props);
    console.log(this.props.details.name +'child constructor');
  }

  componentDidMount() {
    console.log(this.props.details.name +'child componentdidmount')
  }

  render() {
    console.log(this.props.details.name +'child render')
    const {name, location, contact} = this.props.details;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
        <UserDetailsChild />
      </div>
    )
  }
}

export default UserDetails;