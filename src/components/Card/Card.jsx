import React from 'react'


function Card({imageUrl, altText, children}) {
  return (
    <>
    <div className="card rounded shadow" style={{height:'auto'}}>
      <img src={imageUrl} alt={altText} className='rounded' />
      {children}
    </div>
        
    </>
  )
}

export default Card