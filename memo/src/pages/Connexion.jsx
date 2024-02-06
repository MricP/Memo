import '../App.css';
import React from 'react';



function Connexion(){
  return (
        <body>
            <div className='Connexion-container'>
                <h2 className='FormTitle'>Connect You</h2>
                <label>Mail</label><input placeholder='Squared@memo.com' className='inputform' type="text" required/>
                <label>Password</label><input placeholder='*************' className='inputform' type="password" required/>
                <a className='forgotPsswrd' href="/Register">You don't have an account ?</a>
                <button className='BoutonConnexion'>Connect</button>
            </div>
        </body>
      );   
}export default Connexion;

