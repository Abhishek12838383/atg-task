import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div className='box'>
      
<div className="box-1">
    <div className="box-top">
        <div className="icon">
            <img src={props.img} alt="" />
        </div>
        <div className="box-title">
            {props.title}
        </div>
    </div>

    <div className="box-para">
<span>{props.para}</span>
    </div>

    <div className="co">{props.connect}</div>
</div>

    </div>
  )
}

export default Box
