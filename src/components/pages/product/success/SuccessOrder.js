import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../layout/ScrollToTop';
import Logo from '../../../../img/logo.png';

export default class SuccessOrder extends Component {
   render() {
      const { name, firstName, lastName, mobile, email, img } = this.props;
      return (
         <div className='success-page'>
            <ScrollToTop />
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
                              Ade Farm Snails
                           </strong>
                           ! Your order{' '}
                           <strong className='text-primary'>{name}</strong> has
                           been successfully confirmed.{' '}
                           <span className='text-primary'>Ade Farm Snails</span>{' '}
                           has sent you an email on{' '}
                           <strong className='text-primary'>{email}</strong> and
                           will contact you shortly on{' '}
                           <strong className='text-primary'>{mobile}</strong>.
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
                     <div className='back'>
                        <Link to='/'>
                           <h5>
                              <span className='text-primary'>
                                 <i className='fas fa-arrow-left'></i> Back to
                                 Home Page
                              </span>
                           </h5>
                        </Link>
                     </div>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}
