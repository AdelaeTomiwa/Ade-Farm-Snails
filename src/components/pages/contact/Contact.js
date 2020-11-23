import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-3.jpg';

function Contact() {
   return (
      <div className='contact-page'>
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
                           <Link to='our-products'>Our Products</Link>
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
                        Do you have a special occasion where you need as many
                        snail as possible? or do you have difficulty placing
                        your order, please call us on the following number
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
                           westminsterfarmltd@gmail.com
                        </span>
                     </h3>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default Contact;
