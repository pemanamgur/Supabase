import React from 'react'
import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient'

const SmoothieCard = ({smoothie ,onDelete}) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('Supa')
      .delete()
      .eq('id', smoothie.id)
      .select()
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(smoothie.id)
    }
  };
  

  return (
    <div className='smoothie-card'>
      <h3>{smoothie.name}</h3>
      <p>{smoothie.created_at}</p>
      <div className='buttons'>
      
        <Link to={'/' + smoothie.id}>
             <i className='materials-icons'>edit</i>
        </Link>
         <i className='material-icons' 
          onClick={handleDelete}
         >delete</i>
      </div>
    </div>
  )
}

export default SmoothieCard
