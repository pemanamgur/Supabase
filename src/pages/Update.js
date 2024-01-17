import { useEffect, useState } from "react"
import { useParams , useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Update = () => {
 const {id} =  useParams();
 const navigate = useNavigate();


 const [name , setName] = useState('')
 const [created_at , setCreated_At] = useState('')
 const [formError , setFormError] = useState(null)

 const handleSubmit = async (e)=>{
  e.preventDefault();

  if(!name || !created_at){
    setFormError('Please fill all the input')
    return
  }

  const {data , error} = await supabase
  .from('Supa')
  .update({name,created_at })
  .eq('id',id)

  if(error){
       console.log(error);
       setFormError('Please fill all the area.')
  }
  if(data){
    setFormError(null);
    console.log(data);
    navigate('/')
  }

 }

 useEffect(()=>{

  const getSmoothie = async ()=>{

        const {data , error} = await supabase
        .from('Supa')
        .select()
        .eq('id',id)
        .single()
        
        
        if(error){
        navigate('/',{replace : true})
        }
        if(data){
        setName(data.name);
        setCreated_At(data.created_at);
        // console.log(data)
        }
  }
getSmoothie()
 },[id,navigate])
//  console.log(name, created_at);

  
  return (
    <div className="page update">
     <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="created_at">Created_At:</label>
        <input
          type="date"
          id="created_at"
          value={created_at}
          onChange={(e) => setCreated_At(e.target.value)}
        />

        <button>update</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update