import React from 'react'
import './Header.css'

function Header({imgSource}) {
    return (
      <div className="header">
      <div className='header-left' >
          <h2>An inspiring design delivered to your inbox every morning</h2> 
          <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>  
          <h5>Show me how it looks</h5>
          
          <input type="text" placeholder='Your Email Address'/>
           <button>Register Now</button>
          <h6>Free - No Spam - No Data Sharing</h6>
            </div>
            <div className="header-right">
               <img src={imgSource} alt="img" />
            </div>
            </div>
  )
}

export default Header