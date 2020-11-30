import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-2.jpg';

import SlideShow from './SlideShow';
import OrderSelect from './OrderSelect';
import ProductForm from './ProductForm';
import Address from './Address';
import OrderSummary from './OrderSummary';

import Notifications from '../../layout/Notifications';
import Payment from './Payment';
import Confirm from './confirmDetails/Confirm';

import Spinner from '../../layout/Spinner';

import SlideShowTwo from './SlideShowTwo';

class Content extends Component {
   state = {
      products: [],
      selectedProduct: [],
      notificationTop: '-100%',
      notificationType: 'success',
      notificationContent: '',
      proceedCheckout: false,
      proceedOrder: false,
      proceedPayment: false,
      proceedNextStep: false,
      showSlide: false,
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      city: '',
      mobile: '',
      country: '',
      address: '',
      cardName: '',
      totalPrice: '',
      formConfirmed: false,
   };

   componentDidMount() {
      fetch('/data/products.json')
         .then((res) => res.json())
         .then((data) => this.setState({ products: data }));
   }

   selectProduct = (name, img, id, urlName, unitPrice, noOfKilos, subTotal) => {
      this.setState(
         {
            selectedProduct: [
               ...this.state.selectedProduct,
               {
                  name,
                  img,
                  id,
                  urlName,
                  unitPrice,
                  noOfKilos,
                  subTotal: unitPrice * noOfKilos,
               },
            ],
         },
         () => {
            this.setState(
               {
                  notificationTop: '0%',
                  notificationContent: `${name} has been added to your list`,
                  notificationType: 'success',
               },
               () => {
                  setTimeout(
                     () =>
                        this.setState({
                           notificationTop: '-100%',
                           notificationContent: ``,
                        }),
                     3000
                  );
               }
            );
         }
      );

      const { selectedProduct } = this.state;
      // eslint-disable-next-line
      {
         // eslint-disable-next-line
         selectedProduct.map((product) => {
            if (product.id === id) {
               this.setState(
                  {
                     selectedProduct: [
                        ...this.state.selectedProduct.filter(
                           (product) => product.id !== id
                        ),
                     ],
                  },
                  () => {
                     this.setState({
                        notificationTop: '0%',
                        notificationContent: `${name} has been Removed from your list`,
                     });
                  }
               );
            }
         });
      }
   };

   handleKilosChange = (id, e) => {
      this.setState(
         {
            selectedProduct: this.state.selectedProduct.map((product) => {
               if (product.id === id) {
                  return {
                     ...product,
                     noOfKilos: e.target.value,
                     subTotal: product.unitPrice * e.target.value,
                  };
               }
               return product;
            }),
         },
         () => {
            const totalPrice = this.state.selectedProduct.reduce(
               (total, product) => total + product.subTotal,
               0
            );
            this.setState({ totalPrice });
         }
      );
   };

   //  Proceed to First Check Out
   proceedCheckout = () => {
      if (this.state.selectedProduct.length > 0) {
         this.setState({
            proceedCheckout: true,
         });
      } else {
         this.setState(
            {
               notificationTop: '0%',
               notificationContent: `Please select at least One Product`,
               notificationType: 'danger',
            },
            () => {
               setTimeout(
                  () =>
                     this.setState({
                        notificationTop: '-100%',
                        notificationContent: ``,
                     }),
                  3000
               );
            }
         );
      }
   };

   // Display Address Section
   displayAddressSection = () => {
      return {
         display: this.state.proceedCheckout ? 'block' : 'none',
      };
   };

   //  Address Change
   changeAddress = (input) => (e) => {
      this.setState({ [input]: e.target.value });
   };

   addressSubmit = (e) => {
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
               notificationContent: 'Please enter all fields',
               notificationType: 'danger',
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
         this.setState(
            {
               proceedOrder: true,
               proceedPayment: true,
               notificationTop: '-100%',
               notificationContent: '',
            },
            () => {
               const totalPrice = this.state.selectedProduct.reduce(
                  (total, product) => total + product.subTotal,
                  0
               );
               this.setState({ totalPrice });
            }
         );
      }
   };

   //  Display Payment Section
   displayOrderSummary = () => {
      return {
         display: this.state.proceedOrder ? 'block' : 'none',
      };
   };

   // Display Payment Section
   displayPaymentSection = () => {
      return {
         display: this.state.proceedPayment ? 'block' : 'none',
      };
   };

   // Card Change
   handleCardChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
   };

   // Proceed Next Step
   proceedNextStep = () => {
      if (this.state.cardName === '') {
         this.setState(
            {
               notificationTop: '0%',
               notificationContent: 'Please enter your Card Details',
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
         });
      }
   };

   // Display Confirm Section
   displayConfirmSection = () => {
      return {
         display: this.state.proceedNextStep ? 'block' : 'none',
      };
   };

   displayConfirmButton = () => {
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
   submitForm = (e) => {
      e.preventDefault();
      console.log('tomiwa');
      this.setState({ formConfirmed: true });

      emailjs
         .sendForm(
            'service_euoqtqx',
            'template_32lb2ql',
            e.target,
            'user_7EaiqqPdmu9jRArXJGffh'
         )
         .then(
            (result) => {
               console.log(result);
            },
            (error) => {
               console.log(error);
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
      const {
         products,
         selectedProduct,
         notificationContent,
         notificationTop,
         notificationType,
         firstName,
         lastName,
         mobile,
         email,
         state,
         city,
         country,
         address,
         totalPrice,
         cardName,
      } = this.state;
      return (
         <div className='order-now-page'>
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
                  <img src={ShowcaseImg} alt='Snails' />
                  <div className='intro'>
                     <h1>Order Now</h1>
                  </div>
               </div>
               <div className='products-slides'>
                  <h3>Order Now</h3>
                  <div className='slide-show'>
                     <SlideShow />
                  </div>
               </div>
               <div className='order-form-section'>
                  <form onSubmit={this.submitForm}>
                     <h4>Fill Out your Order Form</h4>
                     <div className='container'>
                        <div className='form-container' id='form-container'>
                           <OrderSelect
                              products={products}
                              selectProduct={this.selectProduct}
                           />
                           <ProductForm
                              selectedProduct={selectedProduct}
                              handleKilosChange={this.handleKilosChange}
                              proceedCheckout={this.proceedCheckout}
                           />
                        </div>
                        <div
                           style={this.displayAddressSection()}
                           className='address-section'
                        >
                           <Address
                              firstName={firstName}
                              lastName={lastName}
                              email={email}
                              mobile={mobile}
                              city={city}
                              state={state}
                              country={country}
                              address={address}
                              changeAddress={this.changeAddress}
                              addressSubmit={this.addressSubmit}
                           />
                        </div>
                        <div
                           style={this.displayOrderSummary()}
                           className='order-summary-section'
                        >
                           <OrderSummary
                              selectedProduct={selectedProduct}
                              totalPrice={totalPrice}
                           />
                        </div>
                        <div
                           style={this.displayPaymentSection()}
                           className='payment-section'
                        >
                           <Payment
                              firstName={firstName}
                              lastName={lastName}
                              totalPrice={totalPrice}
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
                              totalPrice={totalPrice}
                              cardName={cardName}
                              selectedProduct={selectedProduct}
                           />
                           <div className='submit-btn'>
                              <button type='submit' className='btn btn-primary'>
                                 Confirm Order
                              </button>
                           </div>
                        </div>
                        <div style={this.showSpinner()}>
                           <Spinner />
                        </div>
                     </div>
                     <div style={this.displaySlide()} className='slide-show'>
                        <SlideShowTwo />
                     </div>
                  </form>
               </div>
            </main>
            <Notifications
               notificationContent={notificationContent}
               top={notificationTop}
               notificationType={notificationType}
            />
         </div>
      );
   }
}

export default Content;
