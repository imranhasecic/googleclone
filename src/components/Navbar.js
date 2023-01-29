import React from 'react';
import profil from '../images/profil.png'
import select from  '../images/select.png'
import './Navbar.css'


function Navbar() {
  return (
    <div className='nav'>
            <div className="rightlinks">
                <div className="navlinks"><a href="#">Gmail</a></div>
                 <div className="navlinks"><a href="#">Images</a></div>
                  <div className="navlinks">
                   <img src={select} alt="select" />
                  </div>
                 <div className="icon"><a href="#"><img src={profil} alt="img"/></a></div>
               </div>
            </div>
  )
}

export default Navbar;
