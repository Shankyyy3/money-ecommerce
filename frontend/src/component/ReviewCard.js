import React from 'react'

const ReviewCard = ({item}) => {
    console.log(item)
  return (
    <div className='reviewCard' style={{border:"1px solid gray", padding:"20px",margin:"10px",width:'200px'}}>
        <p>{item.name}</p>
        <span className='reviewCardComment'>{item.text}</span>
    </div>
  )
}

export default ReviewCard