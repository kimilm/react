import React, { Component } from 'react';

export class BooksIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            loading: true
        }
    }

    componentDidMount() {
        this.populateBooksData();
    }

    static renderBooksTable(books) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.created}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : BooksIndex.renderBooksTable(this.state.books);

        return (
            <>
                <h1>My Books</h1>
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
}