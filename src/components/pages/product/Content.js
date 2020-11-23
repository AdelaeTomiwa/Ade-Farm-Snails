import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import SpecialOccasions from '../../layout/SpecialOccasions';
import Address from './Address';

class Content extends Component {
   state = {
      noOfKilos: 1,
      proceedCheckout: false,
      firstName: '',
      lastName: '',
      mobile: '',
      address: '',
      state: '',
      city: '',
      country: '',
   };

   handleChange = (e) => {
      this.setState({ noOfKilos: e.target.value });
   };

   handleInputChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
   };

   // handleChange = (input) => (e) => {
   //    this.setState({ [input]: e.target.value });
   // };

   proceedCheckout = () => {
      this.setState({ proceedCheckout: !this.state.proceedCheckout });
   };

   render() {
      const { aboutDish, img, unitPrice, name, ingredients } = this.props;
      const {
         firstName,
         lastName,
         mobile,
         address,
         state,
         city,
         country,
      } = this.state;
      return (
         <div className='product'>
            <header>
               <div className='container'>
                  <div className='header'>
                     <div className='logo'>
                        <Link to='/'>
                           <img src={Logo} alt='Ade Farm Snail' />
                        </Link>
                     </div>
                     <nav className='nav'>
                        <ul>
                           <li>
                              <Link to='/about-us'>About Us</Link>
                           </li>
                           <li>
                              <Link to='/our-products'>Our Products</Link>
                           </li>
                           <li>
                              <Link to='/farm'>Our Farm</Link>
                           </li>
                           <li>
                              <Link to='/contact'>Contact Us</Link>
                           </li>
                           <li className='order-now'>
                              <Link to='/order-now'>Order Now</Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </header>
            <main>
               <div className='showcase'>
                  <img src={img} alt={name} />
                  <div className='intro'>
                     <h1>{name}</h1>
                  </div>
               </div>
               <div className='content'>
                  <div className='item'>
                     <div className='container'>
                        <div className='item-content'>
                           <div className='item-img'>
                              <img src={img} alt={name} />
                           </div>
                           <div className='item-details'>
                              <h3>
                                 <span className='text-primary'>{name}</span>
                              </h3>
                              <p>{aboutDish}</p>
                              <p>
                                 <strong>One Kilo: &#x20a6;{unitPrice}</strong>
                              </p>
                              <p>
                                 <strong>Ingredients: {ingredients}</strong>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='item-summary'>
                     <div className='container'>
                        <h4>Item</h4>
                        <div className='item-content'>
                           <div className='item-img'>
                              <img src={img} alt={name} />
                           </div>
                           <div className='item-details'>
                              <h5>{name}</h5>
                              <p>
                                 <strong>Unit Price: {unitPrice}</strong>
                              </p>
                              <div className='kilos'>
                                 <label htmlFor='kilos'>
                                    <span>No of Kilos:</span>
                                 </label>
                                 <div className='select'>
                                    <select
                                       name='Number of Kilos'
                                       value={this.state.noOfKilos}
                                       id='kilos'
                                       onChange={this.handleChange}
                                    >
                                       <option value='1'>1</option>
                                       <option value='2'>2</option>
                                       <option value='3'>3</option>
                                       <option value='4'>4</option>
                                       <option value='5'>5</option>
                                       <option value='6'>6</option>
                                       <option value='7'>7</option>
                                       <option value='8'>8</option>
                                       <option value='9'>9</option>
                                       <option value='10'>10</option>
                                    </select>
                                 </div>
                              </div>

                              <small>
                                 Note: At Ade Farm Snails, We sell our products
                                 by kilo not by quantity. This is to your best
                                 interest and also ours
                              </small>
                           </div>
                        </div>
                        <div className='proceed-btn'>
                           <button
                              onClick={this.proceedCheckout}
                              className='btn btn-light'
                           >
                              Proceed to Checkout
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='proceed'>
                  <div className='address-section'>
                     <Address
                        name={name}
                        firstName={firstName}
                        lastName={lastName}
                        mobile={mobile}
                        address={address}
                        state={state}
                        city={city}
                        country={country}
                        handleChange={this.handleInputChange}
                     />
                  </div>
               </div>
               <div>
                  <div className='container'>
                     <SpecialOccasions />
                  </div>
               </div>
            </main>
         </div>
      );
   }
}

export default Content;
