import '../App.css';
import React from 'react';



function ContentProfile(){
  return (
      <body>
        <div className='Frameexposition-row'>
            <div className='Frameexposition'>
                <p className='dateFrame'>Month, Day</p>
                <div className='FrameProfile'></div>
            </div>
            <div className='Frameexposition'>
                <p className='dateFrame'>Month, Day</p>
                <div className='FrameProfile'></div>
            </div>
        </div>
      </body>
      );   
}

export default ContentProfile;