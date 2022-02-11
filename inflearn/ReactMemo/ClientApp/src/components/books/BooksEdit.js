import React, { Component } from 'react';
import axios from 'axios';

export class BooksEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            created: null
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goIndex = this.goIndex.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get('/api/Books/' + id).then(response => {
            const data = response.data;

            this.setState({
                title: data.title,
                description: data.description,
                created: data.created
            })
        });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        // 리액트에서 컨트롤하도록 고유 submit 기능을 방지
        event.preventDefault();

        const { id } = this.props.match.params;

        let bookDto = {
            title: this.state.title,
            description: this.state.description,
            created: this.state.created
        }

        axios.put('/api/Books/' + id, bookDto).then(result => {
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
                <h3>Edit</h3>
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