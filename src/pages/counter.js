import Link from "gatsby-link";
import React from "react";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button> 
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
                </div>
                <br />
                <p><Link to="/">Home</Link></p>
            </div>
        )
    }
}

export default Counter