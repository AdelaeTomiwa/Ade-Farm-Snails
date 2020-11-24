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
         name,
         img,
         unitPrice,
         noOfKilos,
         cardName,
      } = this.props;

      return (
         <div className='confirm-container'>
            <div className='container'>
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
                           noOfKilos={noOfKilos}
                           name={name}
                           img={img}
                           unitPrice={unitPrice}
                        />
                     </div>
                     <div className='confirm-bank'>
                        <ConfirmBank cardName={cardName} />
                     </div>
                     <div className='proceed-btn'>
                        <button type='submit' className='btn btn-primary'>
                           Confirm Order
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
