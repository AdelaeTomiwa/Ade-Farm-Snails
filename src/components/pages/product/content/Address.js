import React, { Component } from 'react';

class Address extends Component {
   render() {
      const {
         name,
         firstName,
         lastName,
         email,
         mobile,
         address,
         state,
         city,
         country,
         handleAddressChange,
         handleAddressSubmit,
      } = this.props;

      return (
         <div id='address' className='address'>
            <h4>{name}</h4>
            <div className='address-form'>
               <h5>Address Details</h5>
               <div className='form-wrapper'>
                  <div>
                     <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={handleAddressChange('firstName')}
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
                        onChange={handleAddressChange('lastName')}
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
                        onChange={handleAddressChange('email')}
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
                        onChange={handleAddressChange('mobile')}
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
                        onChange={handleAddressChange('address')}
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
                        onChange={handleAddressChange('state')}
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
                        onChange={handleAddressChange('city')}
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
                        onChange={handleAddressChange('country')}
                        required
                     />
                     <label>
                        <span>Country</span>
                     </label>
                  </div>
               </div>

               <div className='proceed-btn' onClick={handleAddressSubmit}>
                  <div className='btn btn-primary'>Proceed To Payment</div>
               </div>
            </div>
         </div>
      );
   }
}

export default Address;
