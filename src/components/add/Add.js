import React from 'react'
import './Add.css'
import own from '../assets/Add.png'

const Add = () => {
  return (
    <div className='add'>
      
<div className="own">
    <div className="own-title">
        <img src={own} alt="" />
        <span>Add your own</span>
    </div>
    <div className="own-para">
    Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
    </div>
    <button className="add-new">Add new</button>
</div>

    </div>
  )
}

export default Add
