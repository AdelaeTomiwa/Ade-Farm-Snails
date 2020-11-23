import React from 'react';
import { Link } from 'react-router-dom';

function SpecialOccasions() {
   return (
      <div className='special-occasion'>
         <h3>For Special Occasion</h3>
         <p>
            <span className='text-primary'>Ade farm snails</span> has the
            breeding capacity for one million snail per year. We are more that
            capable to meet up with all target and budget.
         </p>
         <h4>
            <Link to='/contact'>
               <span className='text-primary'>Contact Us Now</span>
            </Link>
         </h4>
      </div>
   );
}

export default SpecialOccasions;
