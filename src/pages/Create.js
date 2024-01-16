import { useState } from "react"

const Create = () => {

    const [name , setName] = useState('');
    const [created_at , setCreated_At] = useState('');
    const handleSubmit =()=>{
      console.log('hello');
    }
  return (
    <div className="page create">
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input 
        type="text" 
        id="name"
        />    
        <label htmlFor="created_at">Created_At :</label>
        <textarea 
         id="created_at"
         
         ></textarea>
       </form>
    </div>
  )
}

export default Create