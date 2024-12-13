import React from 'react'
import '../assets/styles/Footer.css'
import Logo from '../assets/images/logo1.webp'
function Footer() {
  return (
<div>
  <footer>
    <div className="container-fluid row">
      <div className="flex-parent-ft ">
        <div className="flex-child-ft item1 " id="ft-site-logo">
          <a href>
            <img className="logo" src={Logo} alt=" Logo" />
          </a>
          <div className="contact-us">
            <a href>Contact Us</a>
          </div>
        </div>
        <div className="flex-child-ft item2 ">
          <p className="ft-promo">
            Watch Online is a free movie and TV shows streaming site. With over 50,000 movies and TV Shows
            we let you watch each movie online without having to register or pay. You can also bookmark or
            share each full movie and episode to watch it later if you want.
          </p>
        </div>
      </div>
    </div>
    <div className="ft-copyright">
      <div className="container-fluid">
        <p>
          <a href="#top" id="back-to-top">
            Back to top
          </a>
        </p>
      </div>
    </div>
  </footer>

</div>

  )
}

export default Footer
