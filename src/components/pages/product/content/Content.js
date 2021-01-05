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

import Notifications from '../../../layout/Notifications';

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
      notificationTop: '-100%',
      notificationContent: '',
      formConfirmed: false,
      openNav: false,
   };

   // No Of Kilos
   handleKilosChange = (e) => {
      this.setState({
         noOfKilos: e.target.value,
      });
   };

   toggleNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   closeNav = () => {
      this.setState({ openNav: !this.state.openNav });
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
         this.setState(
            {
               notificationTop: '0%',
               notificationContent: 'Enter all fields, please',
            },
            () => {
               setTimeout(
                  () =>
                     this.setState({
                        notificationTop: '-100%',
                        notificationContent: '',
                     }),
                  3000
               );
            }
         );
      } else {
         this.setState({
            proceedPayment: true,
            notificationTop: '-100%',
            notificationContent: '',
         });
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
         this.setState(
            {
               notificationTop: '0%',
               notificationContent: 'Please enter the details of your card',
            },
            () => {
               setTimeout(
                  () =>
                     this.setState({
                        notificationTop: '-100%',
                        notificationContent: '',
                     }),
                  3000
               );
            }
         );
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
      this.setState({ formConfirmed: true });

      emailjs
         .sendForm(
            'service_nkrdozz',
            'template_27e7b69',
            e.target,
            'user_BFJOk9Ra2wLAkJcyfydWS'
         )
         .then(
            (result) => {
               this.setState({ showSuccess: true, emailResult: false });
            },
            (error) => {
               this.setState(
                  {
                     notificationTop: '0%',
                     notificationContent: 'An error Occurred, Please try again',
                     emailResult: false,
                     formConfirmed: false,
                  },
                  () => {
                     setTimeout(
                        () =>
                           this.setState({
                              notificationTop: '-100%',
                              notificationContent: '',
                           }),
                        3000
                     );
                  }
               );
            }
         );
      e.target.reset();
   };
   showSpinner = () => {
      return {
         display: this.state.formConfirmed ? 'block' : 'none',
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
         showSuccess,
         notificationContent,
         notificationTop,
      } = this.state;

      if (!showSuccess) {
         return (
            <div className='product'>
               <header>
                  <div className='container'>
                     <div className='header'>
                        <div
                           onClick={this.toggleNav}
                           className={
                              this.state.openNav ? 'burger close' : 'burger'
                           }
                        >
                           <div className='line-1'></div>
                           <div className='line-2'></div>
                           <div className='line-3'></div>
                        </div>
                        <div className='logo'>
                           <Link to='/'>
                              <img src={Logo} alt='Ade Farm Snail' />
                           </Link>
                        </div>
                        <nav
                           className={
                              this.state.openNav
                                 ? 'nav-links open'
                                 : 'nav-links'
                           }
                        >
                           <div className='nav'>
                              <ul>
                                 <li className='home-mobile'>
                                    <Link to='/'>Home</Link>
                                 </li>
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
                           </div>
                        </nav>
                        <li className='order-now mobile'>
                           <Link to='/order-now'>Order Now</Link>
                        </li>
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
                                       One Kilo: &#x20A6;{unitPrice}
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
               <Notifications
                  notificationContent={notificationContent}
                  top={notificationTop}
               />
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
