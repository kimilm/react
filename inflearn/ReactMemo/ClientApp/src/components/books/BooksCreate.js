import React, { Component } from 'react';
import axios from 'axios';

export class BooksCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            created: null
        }

        // 이벤트 바인딩
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        // this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goIndex = this.goIndex.bind(this);
    }

    // 함수로 이벤트 처리기를 작성하고 생성자에서 바인딩
    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    // handleChangeDescription(event) {
    //     this.setState({ description: event.target.value });
    // }
    // 람다식으로 변경하면
    // 생성자에서 이벤트 바인딩 하지 않아도 된다
    handleChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        // 리액트에서 컨트롤하도록 고유 submit 기능을 방지
        event.preventDefault();

        let bookDto = {
            title: this.state.title,
            description: this.state.description
        }

        axios.post('/api/Books', bookDto).then(result => {
            this.goIndex();
        });
    }

    goIndex() {
        const { history } = this.props;
        history.push("/books")
    }

    render() {
        return (
            <>
                <h3>Create</h3>
                <div className='row'>
                    <div className='col-md-8'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label>Title</label>
                                <input type="text" className='form-control' value={this.state.title}
                                    placeholder='Enter Title' onChange={this.handleChangeTitle} />
                            </div>

                            <div className='form-group'>
                                <label>Description</label>
                                <input type="text" className='form-control' value={this.state.description}
                                    placeholder='Enter Description' onChange={this.handleChangeDescription} />
                            </div>

                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary'>submit</button>
                                &nbsp;
                                <button className='btn btn-secondary' onClick={this.goIndex}>List</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}