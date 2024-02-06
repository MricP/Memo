import '../style/style.css'
import React from 'react';
import Message from '../asset/Message.svg'

function UpperMessage(){
    return (
        <>
        <div className='container-navbarup'>
            <a href="/"><img src={Message} alt="icone message" /></a>
            <p className='titrePage'>Message</p>
        </div>
        <input className='inputSearchMessage' placeholder='Search...'  type="text" />
        </>
       
    );
  };
  
  export default UpperMessage;