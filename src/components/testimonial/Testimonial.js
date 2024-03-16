import React from 'react'
import './Testimonial.css'
import quo from '../assets/quote.png'
import group from '../assets/Group 108.png'
import audio from '../assets/Audio Track.png'

const Testimonial = () => {
  return (
    <div className='testi'>
      
<div className="testi-title">
    <img src={quo} alt="" />
    Testimonials
</div>

<div className="testi-para">
In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
</div>

<div className="testi-record">
    <div className="rec-1">
        <img src={audio} alt="" />
    </div>
    <div className="rec-2">
        <img src={group} alt="" />
    </div>
</div>


    </div>
  )
}

export default Testimonial
