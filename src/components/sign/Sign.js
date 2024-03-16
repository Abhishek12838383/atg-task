import React from 'react'
import './Sign.css'

const Sign = () => {
  return (
    <div className='signin'>
      
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

<div className="form">
  <div className="rem">
    <input type="checkbox" />
    <span>Remember me</span>
  </div>
  <div className="for">
    <span>Forgot password?</span>
  </div>
</div>

<button className="con">Continue</button>

    </div>
  )
}

export default Sign
