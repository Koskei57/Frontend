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
  
   function handleDelete(id) {
    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
  }


  return (
    <>
      <div className='card'>
       { books.map((book) => (
                <ol key = { book.id } >
                <h1>Title: { book.title }</h1>
                 <p>Publisher: { book.publisher }</p>
                 <p>Price: { book.price }</p>
                </ol>
            ))}
        <NewBook onAddBook={onAddBook} />
        <DeleteBook onDeleteBook={handleDelete} book={ books}/>
      </div>
      
    </>
  )
}

export default Book
