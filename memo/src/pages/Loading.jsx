// Loading.js
import React from 'react';
import Logo from '../asset/Logo.png'
import '../style/style.css';

const Loading = () => {
  return (
    <div className="loading-container">
        <img className='LoadingLogo' src={Logo} alt="LoadingLogo" />
        <h1 className='LoadingTitle'>Memo</h1>
        <p className='FaitPar'>Powered by <div className='SquaredIndustries'> Squared Industries</div></p>
    </div>
    
  );
};

export default Loading;