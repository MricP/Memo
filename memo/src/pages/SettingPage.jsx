import '../App.css';
import React from 'react';
import Setting from '../asset/SettingIcone.svg'
import NavBar from '../component/navBar';



function SettingPage(){
  return (
      <body><NavBar/>
        <div className='containerSetting pages'>
        <div>
        <>
        <div className='container-navbarup'>
            <a href="/"><img src={Setting} alt="icone Setting" /></a>
            <p className='titrePage'>Setting</p>
        </div>
        </>
        </div >
        <h3 className='titreSettings'>Account</h3>
        <a href="/"><p className='textSetting'>change infos</p></a>
        <a href="/"><p className='textSetting'>Notifications</p></a>
        <h3 className='titreSettings'>Type of content</h3>
        <a href="/"><p className='textSetting'>Choose your favorite content</p></a>
        <a href="/"><p className='textSetting'>Deleted content</p></a>
        <h3 className='titreSettings'>Friends</h3>
        <a href="/"><p className='textSetting'>Set people as bestfriend</p></a>
        <a href="/"><p className='textSetting'>See blocked people</p></a>
        <a href="/"><p className='textSetting'>Restrict people</p></a>
        <h3 className='titreSettings'>Activity</h3>
        <a href="/"><p className='textSetting'>Liked</p></a>
        <a href="/"><p className='textSetting'>Shared</p></a>
        <a href="/"><p className='textSetting'>Time</p></a>
        <a href="/"><p className='textSetting'>Stored</p></a>
        <h3 className='titreSettings'>Your app</h3>
        <a href="/"><p className='textSetting'>Permissions</p></a>
        <a href="/"><p className='textSetting'>Account status</p></a>
        <h3 className='titreSettings'>know more of us</h3>
        <a href="/"><p className='textSetting'>Help</p></a>
        <a href="/"><p className='textSetting'>About</p></a>
        
        </div>
      </body>
      );   
}

export default SettingPage;