import React from 'react'
import { useState } from 'react'
import Sign from '../sign/Sign'
import Join from '../join/Join'
import './Hero.css'
import head from '../assets/Explore your hobby or passion.png'
import hero from '../assets/Group 27.png'

const Hero = () => {

  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className='hero'>
      
<div className="hero-left">
<div className="hero-left-heading">
    <img src={head} alt="" />
</div>
<div className="hero-left-para">
<div className="para-1">
Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
</div>
<div className="para-2">
If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
</div>

</div>

<div className="hero-left-img">
    <img src={hero} alt="" />
</div>
</div>

<div className="hero-right">

<div className="hero-right-option">
<div onClick={() => setShowSignIn(false)} className="hero-right-sign">
  Sign In
</div>
<div onClick={() => setShowSignIn(true)} className="hero-right-join">
  Join In
</div>
</div>


      {showSignIn ? <Join/> : <Sign/>}

</div>

    </div>
  )
}

export default Hero
