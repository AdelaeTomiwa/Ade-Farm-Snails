import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-3.jpg';

export default class Contact extends Component {
   state = {
      openNav: false,
   };

   componentDidMount() {
      document.title = `Ade Farm Snails | Contact`;
   }

   toggleNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   closeNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   render() {
      return (
         <div className='contact-page'>
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
                  <img src={ShowcaseImg} alt='Snail' />
                  <div className='intro'>
                     <h1>Contact Us</h1>
                  </div>
               </div>
               <div className='content'>
                  <div className='container'>
                     <div className='contact'>
                        <h5>
                           Do you need as many snails as possible for a
                           particular occasion? If you are having difficulty
                           placing your order, please contact us at the
                           following number.
                        </h5>
                        <h3>
                           <span className='text-primary'>
                              +(234) 9098 870-9973
                           </span>
                        </h3>
                        <h5>Or</h5>
                        <h3>
                           Email us @
                           <span className='text-primary'>
                              support@adefarmsnail.com.ng
                           </span>
                        </h3>
                     </div>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}
