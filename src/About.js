import React from "react";
import ShimmerUI from "./ShimmerUI";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            profile: {}
        }
    }

    async componentDidMount() {
        // calls when component render
        const response = await fetch('https://api.github.com/users/HarshaSriYeluri');
        const json = await response.json();
        this.setState({
            profile: json
        })
    }

    componentDidUpdate() {
        // calls when component rerender by state changes
    }

    componentWillUnmount() {
        // calls when component redirects to another component
    }

    render() {
        const { count, profile: {name, location, company} } = this.state;
        const {contact} = this.props;
        return (Object.keys(this.state.profile).length === 0) ? <ShimmerUI /> : (
            <div className="about">
                <h1>Views: {count} <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} style={{cursor: "pointer"}}>+</button></h1>
                <div>
                    <h1>Name: {name}</h1>
                    <h2>Company: {company}, {location}</h2>
                    <h3>Contact: {contact}</h3>
                </div>
            </div>
        )
    }
}

export default About;