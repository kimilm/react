import React, { Component } from "react";

export class OneWayBindingDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "안녕하세요"
        }

        // 함수를 선언하면 생성자에서 바인드를 해준다.
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <>
                <h1>OneWayBinding</h1>
                <div>{this.state.message}</div>
                <hr />
                <input type="text" value={this.state.message} onChange={this.handleChange}></input>
            </>
        );
    }
}