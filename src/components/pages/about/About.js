import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-3.jpg';

export default class About extends Component {
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
      return (
         <div className='about-page'>
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
                     <h1>About Us</h1>
                  </div>
               </div>
               <div className='content'>
                  <div className='container'>
                     <div className='about'>
                        <h3>About</h3>
                        <p>
                           <span className='text-primary'>Ade Farm Snail</span>,
                           located in Oyo State, Nigeria, is the only snail
                           company in the whole of Nigeria. Our snail breeding
                           is completely hygienic and safe for everyone. We
                           combine proven methods to snail farming and are able
                           to supply quality and healthy snails to organizations
                           and homes within and outside Nigeria.
                        </p>
                        <br />
                        <p>
                           Due to our large farms all over Oyo state, we have a
                           breeding capacity for one million snails per year. We
                           are big suppliers to larger enterprises in Europe,
                           India and United State of America. Do you have a
                           special need for as many snails as possible?{' '}
                           <Link to='/contact'>
                              <span className='text-primary'>
                                 Contact us now
                              </span>
                           </Link>
                           . Our farms are located in several places in oyo
                           state, Nigeria.
                        </p>
                     </div>
                     <div className='products'>
                        <h3>Our Products</h3>
                        <p>
                           We provide you with delicious snail meals such as{' '}
                           <Link to='products/order/Grilled and Peppered Snail/1'>
                              <span className='text-primary'>
                                 Grilled and Peppered Snail
                              </span>
                           </Link>
                           ,{' '}
                           <Link to='products/order/Oven Dried Snail/2'>
                              <span className='text-primary'>
                                 Oven Dried Snail
                              </span>
                           </Link>
                           ,{' '}
                           <Link to='products/order/Fresh Snail/3'>
                              <span className='text-primary'>Fresh Snail</span>
                           </Link>
                           , and{' '}
                           <Link to='products/order/Live Snail/4'>
                              <span className='text-primary'>Live Snail</span>
                           </Link>
                           . We are capable of delivering any amount of snails
                           to an individual or an organization.
                        </p>
                     </div>
                     <div className='farm'>
                        <h3>Our Farm</h3>
                        <p>
                           <span className='text-primary'>Ade farm snails</span>{' '}
                           is a fully capable organization because we
                           independent. This means that we do not depend on an
                           external source for our snails. We produce our snail
                           from our farm. We have three large farms where we
                           raise and grow our snails. We use proven methods to
                           snail farming and for that reason, we are able to
                           produce quality, quantity and healthy snails.
                        </p>
                        <Link to='/farm'>
                           <button className='btn btn-primary'>
                              Take a Look at Our Farm
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}
