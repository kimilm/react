import React, { Component } from "react";

const toDoItems = [
    { id: 1, title: 'React 학습', isDone: true },
    { id: 2, title: 'JavaScript 학습', isDone: true },
    { id: 3, title: 'ASP.NET Core 학습', isDone: false }
];

function ToDoItem(props) {

    const isDoneStyle = {
        textDecoration: "line-through",
    };

    return (
        <li>
            {/* onChange 시 선택된 컴포넌트의 아이디를 부모 컴포넌트에서 넘어온 핸들러로 전달 */}
            <input type="checkbox"
                checked={props.item.isDone}
                onChange={() => props.handleCheckedChange(props.item.id)} />
            <span style={props.item.isDone ? isDoneStyle : null}>{props.item.title}</span>
        </li>
    );
}

export class ToDoListInMemory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: toDoItems
        }

        this.handleCheckedChange = this.handleCheckedChange.bind(this);
    }

    // 자식 컴포넌트로 전달될 핸들러
    // id 값을 보고 해당하는 state 값을 변경
    handleCheckedChange(id) {

        // prev: state 에 존재하는 값
        // 인메모리로 구현하여 살짝 복잡한 과정을 거침
        this.setState(prev => {
            const modified = prev.todos.map(todo => {
                if (todo.id === id) {
                    todo.isDone = !todo.isDone;
                }

                return todo;
            });

            return {
                todos: modified
            }
        });
    }

    render() {
        // handleCheckedChange 를 자식 컴포넌트에 props로 전달
        const todos = this.state.todos.map((todo) => <ToDoItem key={todo.id} item={todo} handleCheckedChange={this.handleCheckedChange} />);

        return (
            <>
                <h3>초간단 인-메모리 TODO 리스트</h3>

                <ul>
                    {todos}
                </ul>
            </>
        );
    }
}

// function ToDoListInMemory() {

//     const todos = toDoItems.map((todo) => <ToDoItem key={todo.id} item={todo} />);

//     return (
//         <>
//             <h3>초간단 인-메모리 TODO 리스트</h3>

//             <ul>
//                 {todos}
//             </ul>
//         </>
//     )
// }

// export default ToDoListInMemory;