import React from 'react';
import searchicon from'../images/searchicon.png';
import mic from'../images/mic.png';
import logo from'../images/logo.png';
import './Home.css';

function Home() {
  return (
    <div className='container'>
        <div className='logo'>
        <img src={logo} alt='logo'/>
        </div> 
        <div className='search'>
           
               <div className='searchbar'>
                    <div className='searchicon'>
                    <img src={searchicon} alt='src'/>
                </div>
                    <div className='searchinput'>
                        <input type="text" name="" id="" />
                    </div> 
                    <div className='mic'>
                    <img src={mic} alt='mic'/>
                    </div>
            </div>
            

        </div>
        </div>
        
        
  );
}

export default Home
