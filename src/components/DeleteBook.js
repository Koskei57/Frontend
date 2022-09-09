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
        <div className="flex justify-center h-800 w-900 mt-12">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-300 shadow-lg">
        <span>{book.title}</span>
        <span>{book.publisher}</span>
        <span>{ book.price}</span>
        <button className='delete' onClick={handleDeleteBook} >Delete</button>
      </div>
      </div>
      </li>
    </div>
  )
}

export default DeleteBook

