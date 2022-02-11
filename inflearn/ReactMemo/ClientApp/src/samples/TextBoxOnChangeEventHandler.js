import React, { Component } from "react";

export class TextBoxOnChangeEventHandler extends Component {
    constructor() {
        super();

        this.state = {
            userName: "",
            password: ""
        }

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserNameChange(event) {
        this.setState({ userName: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <>
                <input type="text" placeholder="아이디" onChange={this.handleUserNameChange} />
                <input type="text" placeholder="패스워드" onChange={this.handlePasswordChange} />
                <hr />
                아이디: {this.state.userName}, 패스워드: {this.state.password}
            </>
        );
    }
}