import React from 'react'
import './Hero-2.css'
import hero from '../components/assets/Group 99.png'
import title from '../components/assets/Explore your hobby or passion.png'

const Heroo = () => {
  return (
    <div className='heroo'>
<div className="heroo-title">
<img src={title} alt="" />
</div>
<button className="start">Get Started</button>

      <div className="heroo-img">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Heroo
