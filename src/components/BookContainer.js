import React from 'react'
import Book from './Book'

const BookContainer = ({book,onDeleteBook}) => {
  const BookList = book.map((item) =>{
      return <Book
          key={item.id}
          item={item}
          onDeleteBook={onDeleteBook}
      />
  })
  return (
    <div className="poems-container">
      {BookList}
    </div>
  );

}

export default BookContainer
