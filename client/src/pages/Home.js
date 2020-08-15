import React, {useState} from "react";
import SearchBar from '../componets/searchbar/index'
import { Row , Col } from '../componets/grid/index'
import {List} from '../componets/list/index'
import Book from '../componets/book/index'
import API from '../utils/API'

export default function Home(){
    const [search, setSearch] = useState("");
    const [bookState, setBook] = useState({
        books: [],
        message: "Search for a book"
    })

    const handleInputChange = (event) => {
        let value = event.target.value
        setSearch(search => ({
          ...search,
          search: value
        }))
      };
    

    const getBooks = () => {
        API.getBooks(search.search)
        .then(res => setBook({...bookState, books:res.data}))
        .catch(err => setBook({
            books:[],
            message: "No books Found. Search again"
        }))
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        getBooks()
    };

    const handleBookSave = id => {
        const bookFind = bookState.books.find(book => book.id === id);
    
        API.saveBook({
          googleId: bookFind.id,
          title: bookFind.volumeInfo.title,
          subtitle: bookFind.volumeInfo.subtitle,
          link: bookFind.volumeInfo.infoLink,
          authors: bookFind.volumeInfo.authors,
          description: bookFind.volumeInfo.description,
          image: bookFind.volumeInfo.imageLinks.thumbnail
        })
        .then(() => getBooks())
        .catch(console.error)

      };
    return(
        <>
        <SearchBar
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
        />
        <Row>
          <Col size="md-12">
            
              {bookState.books.length ? (
                <List>
                  {bookState.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{bookState.message}</h2>
              )}
          </Col>
        </Row>
        </>
    )
}
