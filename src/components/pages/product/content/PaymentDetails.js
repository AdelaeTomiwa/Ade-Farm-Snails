import React, { Component } from 'react';

class PaymentDetails extends Component {
   render() {
      const {
         firstName,
         lastName,
         unitPrice,
         noOfKilos,
         cardName,
         handleCardChange,
         proceedNextStep,
      } = this.props;
      return (
         <div className='payment-details' id='payment-details'>
            <div className='container'>
               <div className='wrapper'>
                  <h5>Payment Details</h5>
                  <div className='lead'>
                     Dear {firstName} {lastName}, please transfer a total of{' '}
                     &#x20a6;
                     {unitPrice * noOfKilos} to either bank account provided
                  </div>
                  <div className='table'>
                     <div className='acc-num'>
                        <div className='head'>
                           <h5>Account Number</h5>
                        </div>
                        <div className='content'>
                           <h5>0099886642</h5>
                           <h5>0099886642</h5>
                        </div>
                     </div>
                     <div className='bank'>
                        <div className='head'>
                           <h5>Bank</h5>
                        </div>
                        <div className='content'>
                           <h5>UBA</h5>
                           <h5>First Bank</h5>
                        </div>
                     </div>
                     <div className='acc-name'>
                        <div className='head'>
                           <h5>Account Name</h5>
                        </div>
                        <div className='content'>
                           <h5>Westminsterfarmsltd</h5>
                           <h5>Adelae Tomiwa</h5>
                        </div>
                     </div>
                  </div>
                  <div className='card-name'>
                     <div className='card-form'>
                        <div>
                           <input
                              type='text'
                              name='cardName'
                              value={cardName}
                              onChange={handleCardChange('cardName')}
                              required
                           />
                           <label>
                              <span>Card&apos;s Holder Name</span>
                           </label>
                        </div>
                        <div className='proceed-btn' onClick={proceedNextStep}>
                           <div className='btn btn-primary'>
                              Proceed To Next Step
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default PaymentDetails;
