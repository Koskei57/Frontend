import React, { useState, useEffect } from 'react'
import '../App.css';

const Author = () => {
  
  const[authors,setAuthors] = useState([])
  
   useEffect(() => {
      fetch("https://books-app-backend.herokuapp.com/author")
      .then((response) => response.json())
      .then((data) =>{
      setAuthors(data)
      })
   }, []);
  
  return (
    <div className='author'>
      { authors.map((author) => (
                <ol key = { author.id } >
                <p>Name: { author.name }</p>
                 <p>Gender: { author.gender }</p>
                 <p>Year: { author.year }</p>
                </ol>
            ))}
      
    </div>
  )
}

export default Author

