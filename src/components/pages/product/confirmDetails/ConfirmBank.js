import React, { Component } from 'react';
import { Link } from 'react-scroll';

class ConfirmBank extends Component {
   render() {
      const { cardName } = this.props;
      return (
         <div className='confirm-bank-details'>
            <div className='head'>
               <h5>Bank Details</h5>
               <Link
                  activeClass='active'
                  to='payment-details'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  <div className='text-primary'>
                     <h5>CHANGE</h5>
                  </div>
               </Link>
            </div>
            <div className='content'>
               <h5>Card Holder Name: {cardName}</h5>
            </div>
         </div>
      );
   }
}

export default ConfirmBank;
