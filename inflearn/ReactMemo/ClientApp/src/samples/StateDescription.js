import React from "react";

export class StateDescription extends React.Component {
    constructor(props) {
        super(props);
        //개체의 리터럴
        this.state = {
            title: "React",
            message: "state 개체를 사용하여 클래스형 컴포넌트의 상태를 관리"
        };
    }

    render() {
        return (
            <>
                <h1>{this.state.title} - {this.state.message}</h1>
            </>
        );
    }
}