import React from 'react'

const DeleteBook = ({book, onDeleteBook }) => {
     const { id, title, publisher,price } = book

    
    function handleDeleteBook() {
    fetch(`http://localhost:9292/book/${book.id}`, {
    method:"DELETE",
    })
      .then(r => r.json())
      .then(() => {
      onDeleteBook(id)
      })
    }
    
  return (
    <div>
      <li>
          <h1>{title}</h1>
          <p>{ publisher}</p>
          <p>{price}</p>
        <button onClick={handleDeleteBook} >Delete</button>
      </li>
    </div>
  )
}

export default DeleteBook

