import { Component } from "react";

class Receipes extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('receipies CDM');
  }
  componentDidUpdate() {
    console.log('reciepes CDU')
  }
  componentWillUnmount() {
    console.log('reciepes CWUM')
  }
  render() {
    return (
      <div>count: {this.state.count} <button onClick={() => {
        this.setState({count: this.state.count + 1})
      }} style={{cursor: "pointer"}}>+</button> </div>
      
    )
  }
}

export default Receipes