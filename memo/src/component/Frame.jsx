import '../style/style.css'
import React from 'react';
import happy from '../asset/happy.svg'
import iconemessageFrame from '../asset/messageFrame.svg'
import More from '../asset/More.svg'

function Frame(){
    return(
        <>
        <div className='FrameMargin'>
            <div className='topFrame'>
                <div className='rectangleUserPic'></div>
                <h2>user_name</h2>
                <a href="/"><img className='More' src={More} alt="More" /></a>    
            </div>
            <div className='Frame'>
            </div>
            <div className='container-react'>
                <a href="/"><img className='happy' src={happy} alt="LikeFrame"/></a>
                <a href="/"><img className='commentaire' src={iconemessageFrame} alt="icone commentaire" /></a>
            </div>
        </div>
            
        </>
    );
}

export default Frame;