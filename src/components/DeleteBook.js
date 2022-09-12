import React from 'react'

const DeleteBook = ({book, onDeleteBook }) => {
   
    function handleDeleteBook() {
    fetch(`https://books-app-backend.herokuapp.com/book/${book.id}`, {
    method:"DELETE",
    })
      .then(r => r.json())
      .then(() => {
      onDeleteBook(book)
      })
    }
    
  return (
    <div>
      
        <div className="flex content-center justify-center mt-5">
        <div className="span">
        <p>Title: {book.title}</p>
        <p>Publisher Name: {book.publisher}</p>
        <p>Price: Ksh{ book.price}</p>
        <button className='delete' onClick={handleDeleteBook} >Delete</button>
      </div>
      </div>
    </div>
  )
}

export default DeleteBook

