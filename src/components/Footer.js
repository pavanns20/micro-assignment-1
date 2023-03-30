import React from 'react'
import "./Footer.css";
function Footer({imgSource2,imgSource3}) {
  return (
      <div className='footer'>
          <div className="footer-left">
              <div>Prompt Generator</div>
              <div>Dweep Daily</div>
              <div>All Contributers</div>
              <div>Your data on Dweep.io</div>
              <div>Contribute to Dweep</div>
          </div>
          <div className="footer-right">
              <div> Dweep.io</div>
              <div>Made with love in India</div>
              <div className="social-icons">
                  <img src={imgSource2} alt="img2" />
                  <img src={imgSource3} alt="img3" />
              </div>
              <div>hello@dweep.io</div>
          </div>
    </div>
  )
}

export default Footer