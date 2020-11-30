import React, { Component } from 'react';

export default class Address extends Component {
   render() {
      const {
         firstName,
         lastName,
         email,
         state,
         city,
         country,
         mobile,
         address,
         changeAddress,
         addressSubmit,
      } = this.props;
      return (
         <div className='address-form' id='address-form'>
            <h5>Address Details</h5>
            <div className='form-wrapper'>
               <div>
                  <input
                     type='text'
                     name='firstName'
                     value={firstName}
                     onChange={changeAddress('firstName')}
                     required
                  />
                  <label>
                     <span>First Name</span>
                  </label>
               </div>
               <div>
                  <input
                     type='text'
                     name='lastName'
                     value={lastName}
                     onChange={changeAddress('lastName')}
                     required
                  />
                  <label>
                     <span>Last Name</span>
                  </label>
               </div>
               <div>
                  <input
                     type='email'
                     name='email'
                     value={email}
                     onChange={changeAddress('email')}
                     required
                  />
                  <label>
                     <span>Email Address</span>
                  </label>
               </div>
               <div>
                  <input
                     type='text'
                     name='mobile'
                     value={mobile}
                     onChange={changeAddress('mobile')}
                     required
                  />
                  <label>
                     <span>Mobile Phone Number</span>
                  </label>
               </div>

               <div>
                  <input
                     type='text'
                     name='address'
                     value={address}
                     onChange={changeAddress('address')}
                     required
                  />
                  <label>
                     <span>Address</span>
                  </label>
               </div>
               <div>
                  <input
                     type='text'
                     name='state'
                     value={state}
                     onChange={changeAddress('state')}
                     required
                  />
                  <label>
                     <span>State / Region</span>
                  </label>
               </div>
               <div>
                  <input
                     type='text'
                     name='city'
                     value={city}
                     onChange={changeAddress('city')}
                     required
                  />
                  <label>
                     <span>City</span>
                  </label>
               </div>
               <div>
                  <input
                     type='text'
                     name='country'
                     value={country}
                     onChange={changeAddress('country')}
                     required
                  />
                  <label>
                     <span>Country</span>
                  </label>
               </div>
            </div>
            <div className='proceed-btn' onClick={addressSubmit}>
               <div className='btn btn-primary'>Proceed To Payment</div>
            </div>
         </div>
      );
   }
}
