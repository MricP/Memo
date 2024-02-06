import '../App.css';
import React from 'react';



function ProfileInfo(){
  return (
      <body>
        <div className='topProfile'>
                <div className='rectangleprofilePic'></div>
                <div className='presentationProfile'>
                    <h2>user_name</h2>
                    <p className='quote'>A quote that define you</p>
                </div> 
        </div>
        <button className='modifyContent'>Modify profile</button>
        <button className='AddContent'>Add content</button>
        <div className='AccountInfosContainer'>
            <div className='AccountInfos'>
            <p className='NumberFrameInfos'>Frame</p><p className='NumberFrameInfos'>10</p>
        </div>
        <div className='AccountInfos'>
            <p className='NumberFansInfos'>Fans</p><p className='NumberFansInfos'>150M</p>
        </div>
        </div>      
      </body>
      );   
}

export default ProfileInfo;