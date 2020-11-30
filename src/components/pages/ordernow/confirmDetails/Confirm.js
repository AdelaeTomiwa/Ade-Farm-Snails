import React, { Component } from 'react';
import ConfirmAddress from './ConfirmAddress';
import ConfirmBank from './ConfirmBank';
import ConfirmOrder from './ConfirmOrder';

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
         totalPrice,
         cardName,
         selectedProduct,
      } = this.props;
      return (
         <div className='confirm-container'>
            <div className='confirm-details'>
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
                  <div className='confirm-ordered'>
                     <ConfirmOrder
                        selectedProduct={selectedProduct}
                        totalPrice={totalPrice}
                     />
                  </div>
                  <div className='confirm-bank'>
                     <ConfirmBank cardName={cardName} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
