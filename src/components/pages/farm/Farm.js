import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/farm-showcase.jpg';
import FarmOne from '../../../img/farm-one.PNG';
import FarmTwo from '../../../img/farm-two.PNG';

import SlideShow from './SlideShow';

export default class Contact extends Component {
   state = {
      openNav: false,
   };

   componentDidMount() {
      document.title = `Ade Farm Snails | Our Farm`;
   }

   toggleNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   closeNav = () => {
      this.setState({ openNav: !this.state.openNav });
   };

   render() {
      return (
         <div className='farm-page'>
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
                     <h1>Our Farm</h1>
                  </div>
               </div>
               <div className='content'>
                  <div className='container'>
                     <div className='farm'>
                        <h3>Our Farm</h3>
                        <p>
                           In Oyo State, Nigeria, our farms are situated in many
                           locations. There are about five arches of land in
                           each of our farms and they all have the breeding
                           capacity to comfortably host three million snails. We
                           provide the snails with a favorable atmosphere that
                           helps their growth. We grow other fruits which allow
                           the snails to be fed directly from our farm.
                        </p>

                        <div className='img-container'>
                           <img src={FarmOne} alt='Our Farm' />
                        </div>
                        <h5>Our Largest Farm</h5>
                     </div>
                     <div className='food'>
                        <h3>Feed</h3>
                        <p>
                           We have a unique formula with the combination of
                           EggShell, Corn, Soya Beans, Soursop, and Plantain at{' '}
                           <span className='text-primary'>
                              Ade Farm Snails.{' '}
                           </span>
                           Our snail is healthy because we also get the fruit
                           which they eat from our farm. This makes it easier to
                           feed them all day long and this contributes to their
                           growth. They also feed clean leaves and vegetables
                           that promote their production by supplying vitamins,
                           proteins and calcium to them.
                        </p>
                        <div className='img-container'>
                           <img src={FarmTwo} alt='Our Snail Farm' />
                        </div>
                        <h5>Our Snail Farm</h5>
                     </div>
                  </div>
                  <div className='slide-show'>
                     <SlideShow />
                  </div>
               </div>
            </main>
         </div>
      );
   }
}
