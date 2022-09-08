import React, { useState, useEffect } from 'react'
import NewBook from './NewBook';
import DeleteBook from './DeleteBook';

const Book = () => {
  
const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:9292/book")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data)
      });
   
  }, []);
  function onAddBook(newBook) {  
  setBooks([...books, newBook])
  }
  
   function handleDelete(deletedBook) {
    const newBooks = books.filter((book) => book.id !== deletedBook.id )
    setBooks(newBooks)
  }


  return (
    <>
      <div className='card'>
        <ul className="book">
        {books.map((book) => (
          <DeleteBook id={book.id} key={book.id} book={book}  onDeleteBook={handleDelete} />
        ))}
      </ul>
        <NewBook onAddBook={onAddBook} />
      </div>
      
    </>
  )
}

export default Book
