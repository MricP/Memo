import '../style/style.css'
import React from 'react';
import AddFrame from '../asset/AddFrame.svg'
import ChangeCountry from '../asset/ChangeCountry.svg'


function Upper(){
    return(
        <div className='upper_container'>
            <a href="/"><img src={ChangeCountry} alt="" /></a>
            <a className='addFrame' href="/"><img src={AddFrame} alt="" /></a>
        </div>
    );
}
export default Upper;