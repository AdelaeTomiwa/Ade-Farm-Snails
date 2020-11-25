// import React, { Component } from 'react';

// class Address extends Component {
//    render() {
//       const {
//          name,
//          firstName,
//          lastName,
//          mobile,
//          address,
//          city,
//          state,
//          country,
//       } = this.props;
//       const { handleChange, handleInputFields } = this.props;
//       return (
//          <div className='address' id='address'>
//             <h4>{name}</h4>
//             <div className='form'>
//                <form>
//                   <h5>Address Details</h5>
//                   <div>
//                      <input
//                         type='text'
//                         name='First Name'
//                         value={firstName}
//                         onChange={handleChange('firstName')}
//                         required
//                      />
//                      <label>
//                         <span>First Name</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='Last Name'
//                         value={lastName}
//                         onChange={handleChange('lastName')}
//                         required
//                      />
//                      <label>
//                         <span>Last Name</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='tel'
//                         name='Mobile Phone Number'
//                         value={mobile}
//                         onChange={handleChange('mobile')}
//                         required
//                      />
//                      <label>
//                         <span>Mobile Phone Number</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         onChange={handleChange('address')}
//                         name='Address'
//                         value={address}
//                         required
//                      />
//                      <label>
//                         <span>Address</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='State / Region'
//                         value={state}
//                         onChange={handleChange('state')}
//                         required
//                      />
//                      <label>
//                         <span>State / Region</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='city'
//                         value={city}
//                         onChange={handleChange('city')}
//                         required
//                      />
//                      <label>
//                         <span>City</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='Country'
//                         value={country}
//                         onChange={handleChange('country')}
//                         required
//                      />
//                      <label>
//                         <span>Country</span>
//                      </label>
//                   </div>
//                   {/* <div className='proceed-btn'>
//                      <button className='btn btn-primary'>
//                         Proceed To Payment
//                      </button>
//                   </div> */}
//                   <div onClick={handleInputFields}>
//                      <div className='btn btn-primary'>Proceed To Payment</div>
//                   </div>
//                </form>
//             </div>
//          </div>
//       );
//    }
// }

// export default Address;

// import React, { Component } from 'react';

// export default class Address extends Component {
//    render() {
//       const {
//          name,
//          firstName,
//          lastName,
//          mobile,
//          address,
//          state,
//          city,
//          country,
//          handleAddressChange,
//          handleAddressSubmit,
//       } = this.props;
//       return (
//          <div id='address-form' className='address-form'>
//             <h4>{name}</h4>
//             <div className='form'>
//                <form>
//                   <h5>Address Details</h5>
//                   <div>
//                      <input
//                         type='text'
//                         name='First Name'
//                         value={firstName}
//                         // onChange={handleAddressChange('firstName')}
//                         required
//                      />
//                      <label>
//                         <span>First Name</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='Last Name'
//                         value={lastName}
//                         // onChange={handleAddressChange('lastName')}
//                         required
//                      />
//                      <label>
//                         <span>Last Name</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='tel'
//                         name='Mobile Phone Number'
//                         value={mobile}
//                         // onChange={handleAddressChange('mobile')}
//                         required
//                      />
//                      <label>
//                         <span>Mobile Phone Number</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         // onChange={handleAddressChange('address')}
//                         name='Address'
//                         value={address}
//                         required
//                      />
//                      <label>
//                         <span>Address</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='State / Region'
//                         value={state}
//                         // onChange={handleAddressChange('state')}
//                         required
//                      />
//                      <label>
//                         <span>State / Region</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='city'
//                         value={city}
//                         // onChange={handleAddressChange('city')}
//                         required
//                      />
//                      <label>
//                         <span>City</span>
//                      </label>
//                   </div>
//                   <div>
//                      <input
//                         type='text'
//                         name='Country'
//                         value={country}
//                         // onChange={handleAddressChange('country')}
//                         required
//                      />
//                      <label>
//                         <span>Country</span>
//                      </label>
//                   </div>
//                   {/* <div className='proceed-btn'>
//                      <button className='btn btn-primary'>
//                         Proceed To Payment
//                      </button>
//                   </div> */}
//                   <div onClick={handleAddressSubmit}>
//                      <div className='btn btn-primary'>Proceed To Payment</div>
//                   </div>
//                </form>
//             </div>
//          </div>
//       );
//    }
// }

import React, { Component } from 'react';

class Address extends Component {
   render() {
      const {
         name,
         firstName,
         lastName,
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
