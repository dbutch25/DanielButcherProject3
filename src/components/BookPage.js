import { useState } from "react";
import axios from "axios";

const BookPage = () => {

    const [ books, setbooks ] = useState(null)

    const fetchData = async () => {
        const response = await axios.get('https://anapioficeandfire.com/api/books?pageSize=30');

        setbooks(response.data);

    };

    return(
        <>
            <section className="bSection">
                <div className="wrapper">
                    <h2>Game Of Thrones Books</h2>
                    <p>Books to checkout if you don't want to be disappointed from watching the TV-show</p>
                    <div>
                        <button className="bookButton" onClick={fetchData}>
                            Books To Read
                        </button>
                    </div>
                </div>

                <div className="books">
                    {books && books.map((book, index) => {
                        const fixedDate = new Date(book.released).toDateString();
                        const authors = book.authors.join(",");

                        return (
                            <div className="book" key={index}>
                                <h3>Book {index +1}</h3>
                                <h2>{book.name}</h2>

                                <div className="details">
                                    <p>{authors}</p>
                                    <p>{book.numberOfPages} pages</p>
                                    <p>{book.country}</p>
                                    <p>{fixedDate}</p>
                                </div>

                                </div>

                        )
                    })
                }
                </div>
            </section>
        </>
    )

}

export default BookPage;