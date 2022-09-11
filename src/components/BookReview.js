import React, {useState,useEffect} from 'react'
import '../App.css';
const BookReview = () => {
  const[reviews, setReview] = useState([])
  
   useEffect(() => {
      fetch("https://books-app-backend.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) =>{
        setReview(data)
      })
    },[]);
  const showReview = reviews.map((review) => (
    <ol key={review.id}>
      <h1>Score:{review.score}</h1>
      <p>comment:{review.comment}</p>
    </ol>
))  
  
  return (
    <div className='author'>
     {showReview}
    </div>
  )
}

export default BookReview

