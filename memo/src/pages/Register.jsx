import '../App.css';
import React from 'react';



function Register(){
  return (
        <body>
            <div className='Register-container'>
                <h2 className='FormTitle'>Register</h2>
                <label>Mail</label><input placeholder='Squared@memo.com' className='inputform' type="email" required />
                <label>Password</label><input placeholder='*************' className='inputform' type="password" required />
                <label>Confirm password</label><input placeholder='*************' className='inputform' type="password"  required/>
                <button className='BoutonRegister'>Register</button>
            </div>
        </body>
      );   
}export default Register;

