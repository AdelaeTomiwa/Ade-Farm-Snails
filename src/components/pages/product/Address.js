import React, { Component } from 'react';

class Address extends Component {
   render() {
      const {
         name,
         firstName,
         lastName,
         mobile,
         address,
         city,
         state,
         country,
      } = this.props;
      const { handleChange } = this.props;
      return (
         <div className='address'>
            <h3>{name}</h3>
            <h5>Address Details</h5>
            <form>
               <div>
                  <input
                     type='text'
                     name='First Name'
                     value={firstName}
                     onChange={handleChange('firstName')}
                     required
                  />
                  <label>First Name</label>
               </div>
               <div>
                  <input
                     type='text'
                     name='Last Name'
                     value={lastName}
                     onChange={handleChange('lastName')}
                     required
                  />
                  <label>Last Name</label>
               </div>
               <div>
                  <input
                     type='tel'
                     name='Mobile Phone Number'
                     value={mobile}
                     onChange={handleChange('mobile')}
                     required
                  />
                  <label>Mobile Phone Number</label>
               </div>
               <div>
                  <input
                     type='text'
                     onChange={handleChange('address')}
                     name='Address'
                     value={address}
                     required
                  />
                  <label>Address</label>
               </div>
               <div>
                  <input
                     type='text'
                     name='State / Region'
                     value={state}
                     onChange={handleChange('state')}
                     required
                  />
                  <label>State / Region</label>
               </div>
               <div>
                  <input
                     type='text'
                     name='city'
                     value={city}
                     onChange={handleChange('city')}
                     required
                  />
                  <label>City</label>
               </div>
               <div>
                  <input
                     type='text'
                     name='Country'
                     value={country}
                     onChange={handleChange('country')}
                     required
                  />
                  <label>Country</label>
               </div>
            </form>
            <div className='proceed-btn'>
               <button className='btn btn-primary'>Proceed To Payment</button>
            </div>
         </div>
      );
   }
}

export default Address;
