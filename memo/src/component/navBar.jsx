import '../style/style.css'
import React from 'react';
import Message from '../asset/Message.svg'
import Search from '../asset/SearchIcone.svg'
import Profile from '../asset/profileIcone.svg'
import Setting from '../asset/SettingIcone.svg'
import Logo from '../asset/Logo.png'

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <a href="/Setting"><img src={Setting} alt="iconeSetting" /></a>
                </li>
                <li>
                    <a href="/Search"><img src={Search} alt="iconeSearch" /></a>
                </li>
                <li>
                    <a href="/"><img className='logo' src={Logo} alt="Logo" /></a>
                </li>
                <li>
                    <a href='/Message'><img src={Message} alt="iconeMessage" /></a>
                </li>
                <li>
                    <a href='/Profil'><img  className="iconeProfile" src={Profile} alt="iconeProfile" /></a>
                </li>
            </ul>
        </nav>
        
    );
}
export default NavBar;