import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='join'>
      <div className="google">
  <div className="google-icon">
    <img src="https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" alt="" />
  </div>
  Continue with Google
</div>

<div className="fb">
  <div className="fb-icon">
    <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
  </div>
  Continue with Facebook
</div>

<div className="line">
  <span>or connect with</span>
</div>

<div className="email">
  <input type="text" placeholder='Email' />
</div>

<div className="pass">
  <input type="text" placeholder='Password' />
</div>

<div className="term">
  By Continuing,you agree to our <span>Terms and services</span>  and <span>Privacy policy</span>
</div>

<button className="ag">Agree and Continue</button>
    </div>
  )
}

export default Join
