import React, { Component } from 'react';
import axios from 'axios';

export class BooksIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            loading: true
        }

        this.renderBooksTable = this.renderBooksTable.bind(this);
        this.editBy = this.editBy.bind(this);
        this.deleteBy = this.deleteBy.bind(this);
    }

    componentDidMount() {
        // this.populateBooksData();
        // this.populateBooksDataWithAxios();
        this.populateBooksDataWithAxiosAsync();
    }

    renderBooksTable(books) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created</th>
                        <th>Action/Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.created ? new Date(book.created).toLocaleDateString() : "-"}</td>
                            <td className='text-nowrap'>
                                <button onClick={() => this.editBy(book.id)} className='btn btn-sm btn-primary'>Edit</button>
                                &nbsp;
                                <button onClick={() => this.deleteBy(book.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    goCreatePage() {
        console.log("create");
    }

    editBy(id) {
        console.log("Edit By " + id);
    }

    deleteBy(id) {
        console.log("Delete By " + id);
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderBooksTable(this.state.books);

        return (
            <>
                <h1>My Books <button onClick={this.goCreatePage} className='btn btn-primary'><span className='fa fa-plus'>+</span></button></h1>
                <h2>제가 집필한 책입니다.</h2>
                {contents}
            </>
        );
    }

    async populateBooksData() {
        const response = await fetch('/api/Books');
        const data = await response.json();
        this.setState({ books: data, loading: false });
    }

    populateBooksDataWithAxios() {
        axios.get("/api/Books").then(response => {
            const data = response.data;
            this.setState({ books: data, loading: false });
        })
    }

    async populateBooksDataWithAxiosAsync() {
        const response = await axios.get("/api/Books");
        const data = response.data;
        this.setState({ books: data, loading: false });
    }
}