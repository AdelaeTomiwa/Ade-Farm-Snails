// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../../img/logo.png';
// import SpecialOccasions from '../../layout/SpecialOccasions';
// import Address from './Address';
// import Confirm from './confirmDetails/Confirm';
// import OrderSummary from './OrderSummary';
// import PaymentDetails from './PaymentDetails';
// import SlideShow from './SlideShow';

// class Content extends Component {
//    state = {
//       name: '',
//       noOfKilos: 1,
//       proceedCheckout: false,
//       proceedPayment: false,
//       proceedNextStep: false,
//       showSlide: false,
//       firstName: '',
//       lastName: '',
//       mobile: '',
//       address: '',
//       state: '',
//       city: '',
//       country: '',
//       totalPrice: '',
//       cardName: '',
//    };

//    componentDidMount() {
//       console.log(this.props);
//    }

//    handleChange = (e) => {
//       this.setState({ noOfKilos: e.target.value });
//    };

//    handleInputChange = (input) => (e) => {
//       this.setState({ [input]: e.target.value });
//    };

//    handleCardChange = (input) => (e) => {
//       this.setState({ [input]: e.target.value });
//    };

//    doNothing = () => {
//       return '';
//    };

//    handleCardSubmit = (e) => {
//       e.preventDefault();
//       this.setState({ proceedNextStep: true, showSlide: true });
//    };

//    proceedCheckout = () => {
//       this.setState({ proceedCheckout: true });
//    };

//    displayCheckout = () => {
//       return {
//          display: this.state.proceedCheckout ? 'block' : 'none',
//       };
//    };

//    handleInputFields = (input) => (e) => {
//       // e.preventDefault();
//       // this.setState({ proceedPayment: true });
//       // const {
//       //    firstName,
//       //    lastName,
//       //    mobile,
//       //    address,
//       //    state,
//       //    city,
//       //    country,
//       // } = this.state;
//       // if (
//       //    firstName === '' ||
//       //    lastName === '' ||
//       //    mobile === '' ||
//       //    address === '' ||
//       //    state === '' ||
//       //    city === '' ||
//       //    country == ''
//       // ) {
//       //    console.log(input);
//       // } else {
//       //    this.setState({ proceedPayment: true });
//       // }
//    };

//    displayPayment = () => {
//       return {
//          display: this.state.proceedPayment ? 'block' : 'none',
//       };
//    };

//    displayConfirmation = () => {
//       return {
//          display: this.state.proceedNextStep ? 'block' : 'none',
//       };
//    };

//    displaySlide = () => {
//       return {
//          display: this.state.showSlide ? 'block' : 'none',
//       };
//    };

//    sendEmail = (e) => {
//       e.preventDefault();
//       console.log('a');
//    };

//    render() {
//       const { aboutDish, img, unitPrice, name, ingredients } = this.props;
//       const {
//          firstName,
//          lastName,
//          mobile,
//          address,
//          state,
//          city,
//          country,
//          noOfKilos,
//          cardName,
//       } = this.state;
//       return (
//          <div className='product'>
//             <header>
//                <div className='container'>
//                   <div className='header'>
//                      <div className='logo'>
//                         <Link to='/'>
//                            <img src={Logo} alt='Ade Farm Snail' />
//                         </Link>
//                      </div>
//                      <nav className='nav'>
//                         <ul>
//                            <li>
//                               <Link to='/about-us'>About Us</Link>
//                            </li>
//                            <li>
//                               <Link to='/our-products'>Our Products</Link>
//                            </li>
//                            <li>
//                               <Link to='/farm'>Our Farm</Link>
//                            </li>
//                            <li>
//                               <Link to='/contact'>Contact Us</Link>
//                            </li>
//                            <li className='order-now'>
//                               <Link to='/order-now'>Order Now</Link>
//                            </li>
//                         </ul>
//                      </nav>
//                   </div>
//                </div>
//             </header>
//             <main>
//                {/* <form onSubmit={this.sendEmail}> */}
//                <div className='showcase'>
//                   <img src={img} alt={name} />
//                   <div className='intro'>
//                      <h1>{name}</h1>
//                   </div>
//                </div>
//                <div className='content'>
//                   <div className='item'>
//                      <div className='container'>
//                         <div className='item-content'>
//                            <div className='item-img'>
//                               <img src={img} alt={name} />
//                            </div>
//                            <div className='item-details'>
//                               <h3>
//                                  <span className='text-primary'>{name}</span>
//                               </h3>
//                               <p>{aboutDish}</p>
//                               <p>
//                                  <strong>One Kilo: &#x20a6;{unitPrice}</strong>
//                               </p>
//                               <p>
//                                  <strong>Ingredients: {ingredients}</strong>
//                               </p>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   <div className='item-summary' id='item-summary'>
//                      <div className='container'>
//                         <h4>Item</h4>
//                         <div className='item-content'>
//                            <div className='item-img'>
//                               <img src={img} alt={name} />
//                            </div>
//                            <div className='item-details'>
//                               <div className='product-name'>
//                                  <input
//                                     type='text'
//                                     name='productName'
//                                     value={name}
//                                     onChange={this.doNothing}
//                                  />
//                               </div>
//                               <div className='product-price'>
//                                  <p>
//                                     <strong>&#x20a6;</strong>
//                                  </p>
//                                  <input
//                                     type='text'
//                                     name='productPrice'
//                                     value={unitPrice}
//                                     onChange={this.doNothing}
//                                  />
//                               </div>
//                               {/* <h5>{name}</h5>
//                               <p>
//                                  <strong>
//                                     Unit Price: &#x20a6;{unitPrice}
//                                  </strong>
//                               </p> */}
//                               <div className='kilos'>
//                                  <label htmlFor='kilos'>
//                                     <span>No of Kilos:</span>
//                                  </label>
//                                  <div className='select'>
//                                     <select
//                                        name='Number of Kilos'
//                                        value={this.state.noOfKilos}
//                                        id='kilos'
//                                        onChange={this.handleChange}
//                                     >
//                                        <option value='1'>1</option>
//                                        <option value='2'>2</option>
//                                        <option value='3'>3</option>
//                                        <option value='4'>4</option>
//                                        <option value='5'>5</option>
//                                        <option value='6'>6</option>
//                                        <option value='7'>7</option>
//                                        <option value='8'>8</option>
//                                        <option value='9'>9</option>
//                                        <option value='10'>10</option>
//                                     </select>
//                                  </div>
//                               </div>

//                               <small>
//                                  Note: At Ade Farm Snails, We sell our products
//                                  by kilo not by quantity. This is to your best
//                                  interest and also ours
//                               </small>
//                            </div>
//                         </div>
//                         {/* <div className='proceed-btn'>
//                               <button
//                                  onClick={this.proceedCheckout}
//                                  className='btn btn-light'
//                               >
//                                  Proceed to Checkout
//                               </button>
//                            </div> */}
//                         <div onClick={this.proceedCheckout}>
//                            <div className='btn btn-light'>
//                               Proceed to Checkout
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className='proceed'>
//                   <div
//                      style={this.displayCheckout()}
//                      className='address-section'
//                   >
//                      <div className='container'>
//                         <Address
//                            name={name}
//                            firstName={firstName}
//                            lastName={lastName}
//                            mobile={mobile}
//                            address={address}
//                            state={state}
//                            city={city}
//                            country={country}
//                            handleChange={this.handleInputChange}
//                            handleInputFields={this.handleInputFields}
//                         />
//                      </div>
//                   </div>
//                   <div
//                      style={this.displayPayment()}
//                      className='payment-section'
//                   >
//                      <OrderSummary
//                         name={name}
//                         img={img}
//                         unitPrice={unitPrice}
//                         noOfKilos={noOfKilos}
//                      />
//                      <PaymentDetails
//                         firstName={firstName}
//                         lastName={lastName}
//                         noOfKilos={noOfKilos}
//                         unitPrice={unitPrice}
//                         cardName={cardName}
//                         handleCardChange={this.handleCardChange}
//                         handleCardSubmit={this.handleCardSubmit}
//                      />
//                   </div>
//                   <div
//                      style={this.displayConfirmation()}
//                      className='confirm-section'
//                   >
//                      <Confirm
//                         name={name}
//                         firstName={firstName}
//                         lastName={lastName}
//                         mobile={mobile}
//                         address={address}
//                         state={state}
//                         city={city}
//                         country={country}
//                         img={img}
//                         unitPrice={unitPrice}
//                         noOfKilos={noOfKilos}
//                         cardName={cardName}
//                      />
//                   </div>
//                </div>

//                <div style={this.displaySlide()} className='slide-show'>
//                   {/* <SlideShow /> */}
//                </div>
//                <div>
//                   <div className='container'>
//                      <SpecialOccasions />
//                   </div>
//                </div>
//                {/* </form> */}
//             </main>
//          </div>
//       );
//    }
// }

// export default Content;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import Logo from '../../../img/logo.png';
// import ItemSummary from './ItemSummary';
// import MainProduct from './MainProduct';

// export default class Content extends Component {
//    state = {
//       noOfKilos: 1,
//       proceedCheckout: false,
//       proceedPayment: false,
//       proceedNextStep: false,
//       showSlide: false,
//       firstName: '',
//       lastName: '',
//       mobile: '',
//       address: '',
//       state: '',
//       city: '',
//       country: '',
//       totalPrice: '',
//       cardName: '',
//    };
//    handleChange = (e) => {
//       this.setState({ noOfKilos: e.target.value });
//    };
//    render() {
//       const { aboutDish, img, unitPrice, name, ingredients } = this.props;
//       return (
//          <div className='product'>
//             <header>
//                <div className='container'>
//                   <div className='header'>
//                      <div className='logo'>
//                         <Link to='/'>
//                            <img src={Logo} alt='Ade Farm Snail' />
//                         </Link>
//                      </div>
//                      <nav className='nav'>
//                         <ul>
//                            <li>
//                               <Link to='/about-us'>About Us</Link>
//                            </li>
//                            <li>
//                               <Link to='/our-products'>Our Products</Link>
//                            </li>
//                            <li>
//                               <Link to='/farm'>Our Farm</Link>
//                            </li>
//                            <li>
//                               <Link to='/contact'>Contact Us</Link>
//                            </li>
//                            <li className='order-now'>
//                               <Link to='/order-now'>Order Now</Link>
//                            </li>
//                         </ul>
//                      </nav>
//                   </div>
//                </div>
//             </header>
//             <main>
//                <div className='showcase'>
//                   <img src={img} alt={name} />
//                   <div className='intro'>
//                      <h1>{name}</h1>
//                   </div>
//                </div>
//             </main>
//             <div className='content'>
//                <MainProduct
//                   img={img}
//                   name={name}
//                   aboutDish={aboutDish}
//                   unitPrice={unitPrice}
//                   ingredients={ingredients}
//                />
//             </div>
//             <form>
//                <div className='item-summary' id='item-summary'>
//                   <ItemSummary
//                      img={img}
//                      name={name}
//                      aboutDish={aboutDish}
//                      unitPrice={unitPrice}
//                      noOfKilos={this.state.noOfKilos}
//                      handleChange={this.handleChange}
//                   />
//                </div>
//             </form>
//          </div>
//       );
//    }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import Logo from '../../../img/logo.png';
import ItemSummary from './ItemSummary';
import Address from './Address';
import OrderSummary from './OrderSummary';
import PaymentDetails from './PaymentDetails';
import Confirm from './confirmDetails/Confirm';

import SlideShow from './SlideShow';

import SpecialOccasion from '../../layout/SpecialOccasions';

class Content extends Component {
   state = {
      name: '',
      noOfKilos: '1',
      firstName: '',
      lastName: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      country: '',
      cardName: '',
      proceedCheckout: false,
      proceedPayment: false,
      proceedNextStep: false,
      showSlide: false,
   };

   // No Of Kilos
   handleKilosChange = (e) => {
      this.setState({ noOfKilos: e.target.value });
   };

   // Proceed to First Check Out
   proceedCheckout = () => {
      this.setState({ proceedCheckout: true });
   };

   // Display Address Section
   displayAddressSection = () => {
      return {
         display: this.state.proceedCheckout ? 'block' : 'none',
      };
   };

   // Handle Address Input Fields
   handleAddressChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
   };

   // Handle Address Submit
   handleAddressSubmit = () => {
      const {
         firstName,
         lastName,
         mobile,
         address,
         state,
         city,
         country,
      } = this.state;
      if (
         firstName === '' ||
         lastName === '' ||
         mobile === '' ||
         address === '' ||
         state === '' ||
         city === '' ||
         country === ''
      ) {
         alert('Please fill out all fields');
      } else {
         this.setState({ proceedPayment: true });
      }
   };

   // Display Payment Section
   displayPaymentSection = () => {
      return {
         display: this.state.proceedPayment ? 'block' : 'none',
      };
   };

   // Handle Card Change
   handleCardChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
   };

   // Proceed Next Step
   proceedNextStep = () => {
      if (this.state.cardName === '') {
         alert('Please Enter your Card Name');
      } else {
         this.setState({ proceedNextStep: true, showSlide: true });
      }
   };

   // Display Confirm Section
   displayConfirmSection = () => {
      return {
         display: this.state.proceedNextStep ? 'block' : 'none',
      };
   };

   displaySlide = () => {
      return {
         display: this.state.showSlide ? 'block' : 'none',
      };
   };

   // Handle Form Submit
   handleOrderSubmit = (e) => {
      e.preventDefault();
      console.log('Submmited');
      emailjs
         .sendForm(
            'service_x1wskzi',
            'template_98hufzv',
            e.target,
            'user_sshSzprq1E7TDabijTy2O'
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   };

   // sendEmail = (e) => {
   //    e.preventDefault();
   //    emailjs
   //       .sendForm(
   //          'service_x1wskzi',
   //          'template_98hufzv',
   //          e.target,
   //          'user_sshSzprq1E7TDabijTy2O'
   //       )
   //       .then(
   //          (result) => {
   //             console.log(result.text);
   //          },
   //          (error) => {
   //             console.log(error.text);
   //          }
   //       );
   //    e.target.reset();
   // };

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
         noOfKilos,
         cardName,
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
               </div>
               <form onSubmit={this.handleOrderSubmit}>
                  <div className='item-summary' id='item-summary'>
                     <ItemSummary
                        handleKilosChange={this.handleKilosChange}
                        proceedCheckout={this.proceedCheckout}
                        unitPrice={unitPrice}
                        img={img}
                        name={name}
                     />
                  </div>
                  <div
                     style={this.displayAddressSection()}
                     className='address-section'
                  >
                     <div className='container'>
                        <Address
                           name={name}
                           firstName={firstName}
                           lastName={lastName}
                           mobile={mobile}
                           address={address}
                           state={state}
                           city={city}
                           country={country}
                           handleAddressChange={this.handleAddressChange}
                           handleAddressSubmit={this.handleAddressSubmit}
                        />
                     </div>
                  </div>
                  <div
                     style={this.displayPaymentSection()}
                     className='payment-section'
                  >
                     <OrderSummary
                        name={name}
                        img={img}
                        unitPrice={unitPrice}
                        noOfKilos={noOfKilos}
                     />
                     <PaymentDetails
                        cardName={cardName}
                        firstName={firstName}
                        lastName={lastName}
                        unitPrice={unitPrice}
                        noOfKilos={noOfKilos}
                        handleCardChange={this.handleCardChange}
                        proceedNextStep={this.proceedNextStep}
                     />
                  </div>
                  <div
                     style={this.displayConfirmSection()}
                     className='confirm-section'
                  >
                     <Confirm
                        firstName={firstName}
                        lastName={lastName}
                        state={state}
                        address={address}
                        mobile={mobile}
                        city={city}
                        country={country}
                        name={name}
                        img={img}
                        unitPrice={unitPrice}
                        noOfKilos={noOfKilos}
                        cardName={cardName}
                     />
                     <div className='submit-btn'>
                        <button type='submit' className='btn btn-primary'>
                           Confirm Order
                        </button>
                     </div>
                  </div>
               </form>
               <div style={this.displaySlide()} className='slide-show'>
                  <SlideShow />
               </div>
               <div className='special-occasion'>
                  <SpecialOccasion />
               </div>
            </main>
         </div>
      );
   }
}

export default Content;
