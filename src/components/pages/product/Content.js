import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';

class Content extends Component {
   state = {
      noOfKilos: 3000,
   };
   render() {
      const { aboutDish, img, unitPrice, name, ingredients } = this.props;
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
                  <div className='item-summary'>
                     <div className='container'>
                        <h4>Item</h4>
                        <div className='item-content'>
                           <div className='item-img'>
                              <img src={img} alt={name} />
                           </div>
                           <div className='item-details'>
                              <h5>{name}</h5>
                              <p>
                                 <strong>Unit Price: {unitPrice}</strong>
                              </p>
                              <div className='kilos'>
                                 <label htmlFor='kilos'>
                                    <span>No of Kilos:</span>
                                 </label>
                                 <input
                                    type='text'
                                    name='Number of Kilos'
                                    id='kilos'
                                    required
                                    value={this.state.noOfKilos}
                                 />
                              </div>
                              <small>
                                 Note:At ade farm snail, we sell our products by
                                 kilo not by quantity. This is to your best
                                 interest and also ours
                              </small>
                           </div>
                        </div>
                        <button className='btn btn-light'>
                           Proceed to CheckOut
                        </button>
                     </div>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}

export default Content;
