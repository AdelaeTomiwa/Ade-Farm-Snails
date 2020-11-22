import React from 'react';
import { Link } from 'react-router-dom';

function Social() {
   return (
      <div className='connect-social'>
         <h4>Join us on Social Media</h4>

         <div className='icons'>
            <Link to='/'>
               <i className='fab fa-facebook'></i>
            </Link>
            <Link to='/'>
               <i className='fab fa-twitter'></i>
            </Link>
            <Link to='/'>
               <i className='fab fa-instagram'></i>
            </Link>
         </div>
      </div>
   );
}

export default Social;
