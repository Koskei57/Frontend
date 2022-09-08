import React,{useState,useEffect} from 'react'

const Author = () => {
  
  const[authors,setAuthors] = useState([])
  
   useEffect(() => {
      fetch("http://localhost:9292/author")
      .then((response) => response.json())
      .then((data) =>{
      setAuthors(data)
      })
   }, []);
  
  return (
    <div className='card'>
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

