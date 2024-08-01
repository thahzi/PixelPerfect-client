import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AddImg() {
  return (
    <>
    
        <div>
        <FontAwesomeIcon icon={faUpload} className='fs-1' />
        <input type="file" /> 
        <div className="btn btn-info rounded-5 shadow">sdsd</div>
        </div>
    
    </>
  )
}

export default AddImg