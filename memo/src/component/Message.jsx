import '../style/style.css'
import React from 'react';

function MessageComponent(){
    return (
        <>
        <a href="/">
            <div className='message-container'>
            <div className='rectangleUserPicMessage'></div>
            <div className='infoPersoMsg'> 
                <p>user_name</p>
                <p className='informationEnvoie'>sent a message 2h</p>
            </div>
        </div>
        </a>
        </>
       
    );
  };
  
  export default MessageComponent;