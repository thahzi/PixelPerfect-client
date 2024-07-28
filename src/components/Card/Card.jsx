import React from 'react'


function Card({imageUrl, text,title, children}) {
  return (
    <>
    <div className="card rounded shadow" style={{height:'auto'}}>
      <img src={imageUrl} className='rounded' />
      {title}
      {text}
      {children}
    </div>
        
    </>
  )
}

export default Card