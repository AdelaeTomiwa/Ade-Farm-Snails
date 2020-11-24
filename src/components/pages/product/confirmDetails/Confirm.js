import React, { Component } from 'react';
import ConfirmAddress from './ConfirmAddress';

export default class Confirm extends Component {
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
         <div className='confirm-container'>
            <div className='container'>
               <div className='head'>
                  <h5>Confirm Details</h5>
                  <div className='lead'>Please Confirm your Details</div>
                  <div className='confirm-address'>
                     <ConfirmAddress
                        firstName={firstName}
                        lastName={lastName}
                        city={city}
                        address={address}
                        state={state}
                        country={country}
                        mobile={mobile}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
