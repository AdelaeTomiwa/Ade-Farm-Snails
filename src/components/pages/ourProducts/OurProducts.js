import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RefreshPage from '../../layout/RefreshPage';

import Product from './Product';

// Importing Context
import { Consumer } from '../../../data/Context';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-2.jpg';

import SpecialOccasion from '../../layout/SpecialOccasions';

class OurProducts extends Component {
   componentDidMount() {
      document.title = 'Ade Farm Snails | Our Products';
   }
   render() {
      return (
         <Consumer>
            {(value) => {
               return (
                  <div className='our-product-page'>
                     {value.reloadHomePage ? <RefreshPage /> : ''}
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
                        {' '}
                        <div className='showcase'>
                           <img src={ShowcaseImg} alt='Snail' />
                           <div className='intro'>
                              <h1>Our Products</h1>
                           </div>
                        </div>
                        <div className='products'>
                           <div className='boxes'>
                              {value.products.map((product) => (
                                 <Product
                                    key={product.id}
                                    name={product.name}
                                    img={product.img}
                                    id={product.id}
                                 />
                              ))}
                           </div>
                        </div>
                        <div className='special-occasion'>
                           <SpecialOccasion />
                        </div>
                     </main>
                  </div>
               );
            }}
         </Consumer>
      );
   }
}

export default OurProducts;
