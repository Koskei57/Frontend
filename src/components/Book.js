import React ,{useState,useEffect} from 'react'

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
  
  return (
    <>
      <div>
       { books.map((book) => (
                <ol key = { book.id } >
                <h1>Title: { book.title }</h1>
                 <p>Publisher: { book.publisher }</p>
                 <p>Price: { book.price }</p>
                </ol>
            ))}
      
      </div>
    </>
  )
}

export default Book
