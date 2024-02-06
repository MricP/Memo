import '../App.css';
import React from 'react';
import Profile from '../asset/profileIcone.svg'
import NavBar from '../component/navBar';
import ProfileInfo from '../component/ProfileInfo';
import ContentProfile from '../component/ContentProfile'


function Profil(){
  return (
      <body> <NavBar/>
      <div className='pages'>
        <div className='container-navbarupProfil'>
            <a href="/"><img src={Profile} alt="icone profil"/></a>
            <p className='titrePageprofil'>Profil</p>
        </div >
       <ProfileInfo/>
       <div className='profileContent'>
        <ContentProfile/><ContentProfile/><ContentProfile/><ContentProfile/></div>
        </div>
        </body>
      );   
}

export default Profil;
