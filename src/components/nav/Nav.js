import React from 'react'
import './Nav.css'
import logo from '../assets/logo.png';
import explore from '../assets/Explore.png';
import hobby from '../assets/Hobbies.png'
import noti from '../assets/notifications_black_24dp 1.png'
import book from '../assets/bookmark_black_24dp 1.png'
import store from '../assets/Product 3.png'


const Nav = () => {

function hide(){
  document.getElementById("hero-left").style.display = "none";
}

  return (
    <div className='nav'>
      
<div className="nav-logo">
    <img src={logo} alt="" />
</div>

<div className="nav-input">
  <input type="text"  placeholder='Search here...'/>
  <div className="nav-input-icon">
  <span class="material-symbols-outlined">
search
</span>
  </div>
</div>

<div className="nav-menu">
  
<div className="explore">
  <div className="ex-ixon">
 <img src={explore} alt="" />
  </div>
Explore
  <span class="material-symbols-outlined">
expand_more
</span>
</div>

<div className="hobby">
  
  <div className="ex-ixon">
 <img src={hobby} alt="" />
  </div>
  Hobbies
  <span class="material-symbols-outlined">
expand_more
</span>
</div>

<div className="bookmark">
<img src={book} alt="" />
</div>

<div className="noti">
<img src={noti} alt="" />
</div>

<div className="store">
<img src={store} alt="" />
</div>

<button className="sign">Sign In</button>

</div>

{/* responsive */}

<div className="nav-res">
<img src={noti} alt="" />
<span class="material-symbols-outlined">
search
</span>
<span onClick={hide} class="material-symbols-outlined">
menu
</span>
</div>


    </div>

  )
}

export default Nav
