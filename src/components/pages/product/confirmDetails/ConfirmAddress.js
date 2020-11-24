import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class ConfirmAddress extends Component {
   render() {
      const {
         firstName,
         lastName,
         state,
         address,
         mobile,
         city,
         country,
      } = this.props;
      return (
         <div className='confirm-address'>
            <div className='head'>
               <h5>Address Details</h5>
               <Link
                  activeClass='active'
                  to='address'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  <button className='btn btn-light'>
                     <span className='text-primary'>CHANGE</span>
                  </button>
               </Link>
            </div>
            <div className='content'>
               <h5>
                  {firstName} {lastName}
               </h5>
               <p>
                  {address}, {state}, {city}, {country}
               </p>
               <p>{mobile}</p>
            </div>
         </div>
      );
   }
}
