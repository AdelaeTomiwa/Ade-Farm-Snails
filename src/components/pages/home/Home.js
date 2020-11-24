import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import SlideShow from './SlideShow';
import Farm from './Farm';
import Social from './Social';

// Importing Context
import { Consumer } from '../../../data/Context';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-3.jpg';

import Product from './Product';

class Home extends Component {
   render() {
      return (
         <Consumer>
            {(value) => {
               return (
                  <div className='home-page'>
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
                                       <Link to='about-us'>About Us</Link>
                                    </li>
                                    <li>
                                       <Link to='our-products'>
                                          Our Products
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to='farm'>Our Farm</Link>
                                    </li>
                                    <li>
                                       <Link to='contact'>Contact Us</Link>
                                    </li>
                                    <li className='order-now'>
                                       <Link to='order-now'>Order Now</Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </header>
                     <main>
                        <div className='showcase' id='show'>
                           <img src={ShowcaseImg} alt='Snail' />
                           <div className='intro'>
                              <h1>
                                 Snails for{' '}
                                 <span>
                                    {/* <Typical
                                       steps={[
                                          'Pleasure',
                                          2000,
                                          'Satisfaction',
                                          3000,
                                          'Relaxation',
                                          4000,
                                          'Enjoyment',
                                          5000,
                                       ]}
                                       loop={Infinity}
                                       wrapper='b'
                                    /> */}
                                 </span>
                              </h1>
                              <Link to='/order-now'>
                                 <button className='btn-primary'>
                                    Order Now
                                 </button>
                              </Link>
                           </div>
                        </div>
                        <div className='products'>
                           <div className='container'>
                              <div className='boxes'>
                                 {value.products.map((product) => (
                                    <Product
                                       key={product.id}
                                       aboutDish={product.aboutDish}
                                       name={product.name}
                                       img={product.img}
                                       id={product.id}
                                    />
                                 ))}
                              </div>
                           </div>
                        </div>
                        <div className='slide-show'>
                           <SlideShow />
                        </div>
                        <div className='place-order'>
                           <Link to='order-now'>
                              <button className='btn btn-primary'>
                                 Place An Order Now
                              </button>
                           </Link>
                        </div>
                        <div className='farm'>
                           <div className='container'>
                              <Farm />
                           </div>
                        </div>
                        <div className='social-media'>
                           <div className='container'>
                              <Social />
                           </div>
                        </div>
                     </main>
                  </div>
               );
            }}
         </Consumer>
      );
   }
}
export default Home;
