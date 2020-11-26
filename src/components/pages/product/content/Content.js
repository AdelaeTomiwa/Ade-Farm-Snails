// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// import Logo from '../../../img/logo.png';
// import ItemSummary from './ItemSummary';
// import Address from './Address';
// import OrderSummary from './OrderSummary';
// import PaymentDetails from './PaymentDetails';
// import Confirm from './confirmDetails/Confirm';

// import SlideShow from './SlideShow';

// import SpecialOccasion from '../../layout/SpecialOccasions';
// import SuccessOrder from '../SuccessOrder';

// class Content extends Component {
//    state = {
//       name: '',
//       noOfKilos: 1,
//       firstName: '',
//       lastName: '',
//       mobile: '',
//       address: '',
//       city: '',
//       state: '',
//       country: '',
//       cardName: '',
//       totalPrice: '',
//       proceedCheckout: false,
//       proceedPayment: false,
//       proceedNextStep: false,
//       showSlide: false,
//       showConfirm: false,
//    };

//    // No Of Kilos
//    handleKilosChange = (e) => {
//       console.log(this.props.unitPrice);
//       this.setState({
//          noOfKilos: e.target.value,
//       });
//    };

//    // Proceed to First Check Out
//    proceedCheckout = () => {
//       this.setState({
//          proceedCheckout: true,
//       });
//    };

//    // Display Address Section
//    displayAddressSection = () => {
//       return {
//          display: this.state.proceedCheckout ? 'block' : 'none',
//       };
//    };

//    // Handle Address Input Fields
//    handleAddressChange = (input) => (e) => {
//       this.setState({ [input]: e.target.value });
//    };

//    // Handle Address Submit
//    handleAddressSubmit = () => {
//       const {
//          firstName,
//          lastName,
//          mobile,
//          address,
//          state,
//          city,
//          country,
//       } = this.state;
//       if (
//          firstName === '' ||
//          lastName === '' ||
//          mobile === '' ||
//          address === '' ||
//          state === '' ||
//          city === '' ||
//          country === ''
//       ) {
//          alert('Please fill out all fields');
//       } else {
//          this.setState({ proceedPayment: true });
//       }
//    };

//    // Display Payment Section
//    displayPaymentSection = () => {
//       return {
//          display: this.state.proceedPayment ? 'block' : 'none',
//       };
//    };

//    // Handle Card Change
//    handleCardChange = (input) => (e) => {
//       this.setState({ [input]: e.target.value });
//    };

//    // Proceed Next Step
//    proceedNextStep = () => {
//       if (this.state.cardName === '') {
//          alert('Please Enter your Card Name');
//       } else {
//          this.setState({
//             proceedNextStep: true,
//             showSlide: true,
//             totalPrice: this.state.noOfKilos * this.props.unitPrice,
//          });
//       }
//    };

//    // Display Confirm Section
//    displayConfirmSection = () => {
//       return {
//          display: this.state.proceedNextStep ? 'block' : 'none',
//       };
//    };

//    displaySlide = () => {
//       return {
//          display: this.state.showSlide ? 'block' : 'none',
//       };
//    };

//    // Handle Form Submit
//    handleOrderSubmit = (e) => {
//       e.preventDefault();
//       console.log('Submmited');
//       this.setState({showConfirm:true})

//       // emailjs
//       //    .sendForm(
//       //       'service_euoqtqx',
//       //       'template_d4i5pp4',
//       //       e.target,
//       //       'user_7EaiqqPdmu9jRArXJGffh'
//       //    )
//       //    .then(
//       //       (result) => {
//       //          console.log(result.text);
//       //       },
//       //       (error) => {
//       //          console.log(error.text);
//       //       }
//       //    );
//       // e.target.reset();
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
//          totalPrice,
//          cardName,
//          proceedPayment,
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
//                </div>
//                <form onSubmit={this.handleOrderSubmit}>
//                   <div className='item-summary' id='item-summary'>
//                      <ItemSummary
//                         handleKilosChange={this.handleKilosChange}
//                         proceedCheckout={this.proceedCheckout}
//                         unitPrice={unitPrice}
//                         img={img}
//                         name={name}
//                      />
//                   </div>
//                   <div
//                      style={this.displayAddressSection()}
//                      className='address-section'
//                      id='address-section'
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
//                            handleAddressChange={this.handleAddressChange}
//                            handleAddressSubmit={this.handleAddressSubmit}
//                            proceedPayment={proceedPayment}
//                         />
//                      </div>
//                   </div>
//                   <div
//                      style={this.displayPaymentSection()}
//                      className='payment-section'
//                      id='payment-section'
//                   >
//                      <OrderSummary
//                         name={name}
//                         img={img}
//                         unitPrice={unitPrice}
//                         noOfKilos={noOfKilos}
//                      />
//                      <PaymentDetails
//                         cardName={cardName}
//                         firstName={firstName}
//                         lastName={lastName}
//                         unitPrice={unitPrice}
//                         noOfKilos={noOfKilos}
//                         handleCardChange={this.handleCardChange}
//                         proceedNextStep={this.proceedNextStep}
//                      />
//                   </div>
//                   <div
//                      style={this.displayConfirmSection()}
//                      className='confirm-section'
//                   >
//                      <Confirm
//                         firstName={firstName}
//                         lastName={lastName}
//                         state={state}
//                         address={address}
//                         mobile={mobile}
//                         city={city}
//                         country={country}
//                         name={name}
//                         img={img}
//                         unitPrice={unitPrice}
//                         noOfKilos={noOfKilos}
//                         totalPrice={totalPrice}
//                         cardName={cardName}
//                      />
//                      <div className='submit-btn'>
//                         <button type='submit' className='btn btn-primary'>
//                            Confirm Order
//                         </button>
//                      </div>
//                   </div>
//                </form>
//                <div style={this.displaySlide()} className='slide-show'>
//                   <SlideShow />
//                </div>
//                <div className='special-occasion'>
//                   <SpecialOccasion />
//                </div>
//             </main>
//          </div>
//       );
//    }
// }

// export default Content;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import Logo from '../../../../img/logo.png';
import ItemSummary from './ItemSummary';
import Address from './Address';
import OrderSummary from './OrderSummary';
import PaymentDetails from './PaymentDetails';
import Confirm from './confirmDetails/Confirm';

import SlideShow from './SlideShow';

import Spinner from '../../../layout/Spinner';

import SpecialOccasion from '../../../layout/SpecialOccasions';
import SuccessOrder from '../success/SuccessOrder';

class Content extends Component {
   state = {
      name: '',
      noOfKilos: 1,
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      country: '',
      cardName: '',
      totalPrice: '',
      proceedCheckout: false,
      proceedPayment: false,
      proceedNextStep: false,
      showSlide: false,
      showConfirm: false,
      emailResult: false,
   };

   // No Of Kilos
   handleKilosChange = (e) => {
      this.setState({
         noOfKilos: e.target.value,
      });
   };

   // Proceed to First Check Out
   proceedCheckout = () => {
      this.setState({
         proceedCheckout: true,
      });
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
         email,
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
         email === '' ||
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
         this.setState({
            proceedNextStep: true,
            showSlide: true,
            totalPrice: this.state.noOfKilos * this.props.unitPrice,
         });
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

   deterSpinner = (e) => {
      this.setState({ emailResult: true });
   };

   // Handle Form Submit
   handleOrderSubmit = (e) => {
      e.preventDefault();
      console.log('Submmited');

      emailjs
         .sendForm(
            'service_euoqtqx',
            'template_d4i5pp4',
            e.target,
            'user_7EaiqqPdmu9jRArXJGffh'
         )
         .then(
            (result) => {
               this.setState({ showConfirm: true, emailResult: false });
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   };
   showSpinner = () => {
      return {
         display: this.state.emailResult ? 'block' : 'none',
      };
   };

   render() {
      const { aboutDish, img, unitPrice, name, ingredients } = this.props;
      const {
         firstName,
         lastName,
         email,
         mobile,
         address,
         state,
         city,
         country,
         noOfKilos,
         totalPrice,
         cardName,
         proceedPayment,
         showConfirm,
      } = this.state;

      // {
      if (!showConfirm) {
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
                                    <strong>
                                       One Kilo: &#x20a6;{unitPrice}
                                    </strong>
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
                        id='address-section'
                     >
                        <div className='container'>
                           <Address
                              name={name}
                              firstName={firstName}
                              lastName={lastName}
                              email={email}
                              mobile={mobile}
                              address={address}
                              state={state}
                              city={city}
                              country={country}
                              handleAddressChange={this.handleAddressChange}
                              handleAddressSubmit={this.handleAddressSubmit}
                              proceedPayment={proceedPayment}
                           />
                        </div>
                     </div>
                     <div
                        style={this.displayPaymentSection()}
                        className='payment-section'
                        id='payment-section'
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
                           totalPrice={totalPrice}
                           cardName={cardName}
                        />
                        <div className='submit-btn' onClick={this.deterSpinner}>
                           <button type='submit' className='btn btn-primary'>
                              Confirm Order
                           </button>
                        </div>
                        <div style={this.showSpinner()}>
                           <Spinner />
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
      } else {
         return (
            <SuccessOrder
               name={name}
               firstName={firstName}
               lastName={lastName}
               email={email}
               mobile={mobile}
               img={img}
            />
         );
      }
   }
}
// }

export default Content;
