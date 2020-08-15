import React, {useState, useEffect} from "react";
import {List} from '../componets/list/index'
import Book from '../componets/book/index'
import API from '../utils/API'

export default function Saved(){
    const [bookState, setBook] = useState({
        books: [],
    })

    useEffect(() => {
        getSavedBooks()
        
    }, [])
    
const getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        setBook({
          books: res.data
        })
      )
      .catch(console.error);
  };

  const handleBookDelete = id => {
    API.deleteBook(id).then(res => getSavedBooks());
  };
    return(
        <>
        {bookState.books.length ? (
        <List>
            {bookState.books.map(book => (
            <Book
                key={book._id}
                title={book.title}
                subtitle={book.subtitle}
                link={book.link}
                authors={book.authors.join(", ")}
                description={book.description}
                image={book.image}
                Button={() => (
                <button
                    onClick={() => handleBookDelete(book._id)}
                    className="btn btn-danger ml-2"
                >
                    Delete
                </button>
                )}
            />
            ))}
        </List>
        ) : (
        <h2 className="text-center">No Saved Books</h2>
        )}
    </>
    )
}