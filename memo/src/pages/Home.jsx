import '../App.css';
import React from 'react';
import NavBar from '../component/navBar';
import Frame from '../component/Frame';
import Upper from '../component/UpperHome';
import UpperSuggest from '../component/UpperSuggest';


function Home(){
  return (
      <body><NavBar />
        <div className='pages'>
          <Upper />
          <div className='pcVersionHome'>
          <div className='SuggestFriend'>
            <UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest /><UpperSuggest />
          </div>
          <div className='mainContent'>
            <Frame /><Frame /><Frame /><Frame /><Frame /><Frame />
          </div>
          </div>
        </div >
      </body>
      );   
}

export default Home;
