import React, {useState,useEffect} from 'react'

const BookReview = () => {
  const[reviews, setReview] = useState([])
  
   useEffect(() => {
      fetch("http://localhost:9292/reviews")
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
    <div>
     {showReview}
    </div>
  )
}

export default BookReview

