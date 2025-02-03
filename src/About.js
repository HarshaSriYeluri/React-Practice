import React from "react";
import UserDetails from "./UserDetails";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('parent constructor')
    }

    componentDidMount() {
        console.log('parent componentdidmount');
    }

    componentWillUnmount() {
        console.log('parent CWUM')
    }

    render() {
        console.log('parent render');
        const { count } = this.state;
        return (
            <div className="about">
                <h1>Views: {count} <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} style={{cursor: "pointer"}}>+</button></h1>
                <UserDetails details={this.props}/>
                <UserDetails details={{name:"Gupta", location:"Banglore", contact:"9876543210"}}/>
                
            </div>
        )
    }
}

export default About;