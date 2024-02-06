import React from 'react';
import NavBar from '../component/navBar';
import UpperMessage from '../component/UpperMessage';
import Message from '../component/Message';

const MessagePage = () => {
  return (
  <body>
    <NavBar/>
    <div className='pages'>
      <UpperMessage/><Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/>
    </div>
  </body>
  
  );
};

export default MessagePage;