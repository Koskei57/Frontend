import React, { useState } from 'react'
import "../css/Newbook.css"

const NewBook = ({ onAddBook}) => {
   
    const [formData, setFormData] = useState({ title: "", publisher: "", price: "" });
    
    function handleChange(e) {
    setFormData({ ...formData , [e.target.name]: e.target.value})}
    
    function handleSubmit(event) {
    event.preventDefault();
    fetch("https://books-app-backend.herokuapp.com/book",{
      method: "POST",
      headers: {
      "Content-Type":"application/json",
      },
      body: JSON.stringify({title:formData.title,publisher:formData.publisher,price:formData.price})
    })
      .then(res => res.json())
      .then((data) => {
        onAddBook(data)
        setFormData({...formData,title:"",publisher:"",price:""})
      })
    }
    
  
  
  return (
    <div className='newbook'>
          <form className="form" onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={formData.title} name="title" placeholder="Title" />
              <input type="text" onChange={handleChange} value={formData.publisher}    name="publisher"placeholder="Publisher"/>
              <input type="text" onChange={handleChange} value={formData.price} name="price" placeholder="Price" />
              <button  className="btn" type="submit">Submit</button>
             
    </form>
    </div>
  )
}

export default NewBook

