import React from 'react'

const DeleteBook = ({book, onDeleteBook }) => {
   
    function handleDeleteBook() {
    fetch(`http://localhost:9292/book/${book.id}`, {
    method:"DELETE",
    })
      .then(r => r.json())
      .then(() => {
      onDeleteBook(book)
      })
    }
    
  return (
    <div>
      <li>
        <span>{book.title}</span>
        <span>{book.publisher}</span>
        <span>{ book.price}</span>
        <button onClick={handleDeleteBook} >Delete</button>
      </li>
    </div>
  )
}

export default DeleteBook

