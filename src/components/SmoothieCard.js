import React from 'react'

const SmoothieCard = ({smoothie}) => {
  return (
    <div className='smoothie-card'>
      <h3>{smoothie.name}</h3>
      <p>{smoothie.created_at}</p>
    </div>
  )
}

export default SmoothieCard
