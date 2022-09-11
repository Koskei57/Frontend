import React, { useState, useEffect } from 'react'
import NewBook from './NewBook';
import DeleteBook from './DeleteBook';
import EditBook from './EditBook';

const Book = () => {
  
const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetch("https://books-app-backend.herokuapp.com/book")
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
  function handleEditChange(editedBook) {
  
  }

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center'>
      <div className="w-100 p-2 bg-white rounded-x2">
        <ul className="">
        {books.map((book) => (
          <DeleteBook id={book.id} key={book.id} book={book}  onDeleteBook={handleDelete} />
        ))}
      </ul>
          <NewBook onAddBook={onAddBook} />
          <div className='edit'>
            <EditBook onEditBook={handleEditChange} />
          </div>
      </div>
      </div>
    </>
  )
}

export default Book
