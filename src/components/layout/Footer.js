import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

function Footer() {
   return (
      <footer>
         <div className='first'>
            <div className='container'>
               <div className='footer'>
                  <div className='logo'>
                     <Link to='/'>
                        <img src={Logo} alt='Ade Farm Snails' />
                     </Link>
                  </div>

                  <div className='links'>
                     <div>
                        <ul>
                           <li>
                              <Link to='about-us'>ABOUT US</Link>
                           </li>
                           <li>
                              <Link to='/our-products'>OUR PRODUCTS</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <ul>
                           <li>
                              <Link to='/farm'>OUR FARM</Link>
                           </li>
                           <li>
                              <Link to='/contact'>CONTACT US</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='second'>
            <p>COPYRIGHT &copy; 2020 ADE FARM SNAIL. ALL RIGHT RESERVED</p>
         </div>
      </footer>
   );
}

export default Footer;
