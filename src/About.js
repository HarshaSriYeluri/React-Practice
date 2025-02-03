import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // calls when component render
    }

    componentDidUpdate() {
        // calls when component rerender by state changes
    }

    componentWillUnmount() {
        // calls when component redirects to another component
    }

    render() {
        const { count } = this.state;
        const {name, location, contact} = this.props;
        return (
            <div className="about">
                <h1>Views: {count} <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} style={{cursor: "pointer"}}>+</button></h1>
                <div>
                    <h1>Name: {name}</h1>
                    <h2>Location: {location}</h2>
                    <h3>Contact: {contact}</h3>
                </div>
            </div>
        )
    }
}

export default About;