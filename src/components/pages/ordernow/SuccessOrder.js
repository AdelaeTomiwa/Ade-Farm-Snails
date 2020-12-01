import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../layout/ScrollToTop';
import Logo from '../../../img/logo.png';

import ShowcaseImg from '../../../img/peppered-2.jpg';

class SuccessOrder extends Component {
   state = {
      openNav: false,
   };
   toggleNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   closeNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };
   render() {
      const { firstName, lastName, mobile, email } = this.props;

      return (
         <div className='success-page'>
            <ScrollToTop />
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
                           this.state.openNav ? 'nav-links open' : 'nav-links'
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
                  <img src={ShowcaseImg} alt='Snails' />
                  <div className='intro'>
                     <h1>Ade Farm Snails</h1>
                  </div>
               </div>
               <div className='content'>
                  <div className='container'>
                     <h3>Success</h3>

                     <div className='success-message'>
                        <h4>
                           Dear{' '}
                           <span className='text-primary'>
                              {firstName} {lastName}
                           </span>
                           ,
                        </h4>
                        <p>
                           Thank you for shopping with{' '}
                           <strong className='text-primary'>
                              Ade Farm Snails!
                           </strong>{' '}
                           Your orders has been successfully confirmed.{' '}
                           <span className='text-primary'>Ade Farm Snails</span>{' '}
                           has sent you an email on{' '}
                           <strong className='text-primary'>{email}</strong> and
                           will contact you shortly on{' '}
                           <strong className='text-primary'>
                              {mobile} when the payment has been confirmed
                           </strong>
                           .
                        </p>
                     </div>
                     <div className='enquires'>
                        <h4>For More Enquires</h4>
                        <Link to='/contact'>
                           <h5>
                              <span className='text-primary'>
                                 Contact us now
                              </span>
                           </h5>
                        </Link>
                     </div>

                     <Link to='/'>
                        <h5>
                           <span className='text-primary'>
                              <i className='fas fa-arrow-left'></i> Back to Home
                              Page
                           </span>
                        </h5>
                     </Link>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}

export default SuccessOrder;
