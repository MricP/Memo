import '../App.css';
import React from 'react';
import Search from '../asset/SearchIcone.svg'
import Trending from '../component/TrendingShowing';
import NavBar from '../component/navBar';



function SearchPage(){
  return (
      <body>
        <NavBar/>
        <div className='pages'>
          <div className='page-container'>
             <div className='container-navbarup'>
            <a href="/"><img src={Search} alt="icone Search" /></a>
            <p className='titrePage'>Search</p>
            </div>
            <input type="text" placeholder='Search...' className='inputSearchTrend' />
            <h2 className='titreSearchPage'>Trending this week :</h2>
            
            <Trending/><Trending/><Trending/><Trending/>
            </div >
          </div>
        </body>
      );   
}

export default SearchPage;