import React  from 'react'

const EditBook = ({ book, onEditBook }) => {
//  const{title,publisher,price} = book
  
  
    function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://books-app-backend.herokuapp.com/book/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title:"", publisher:"", price:""})
    })
      .then((r) => r.json())
      .then(() => onEditBook(book));
  }

    
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
              {/* <button className="btn" type='submit'>Edit</button>   */}
    </form>
    </div>
  )
}

export default EditBook

