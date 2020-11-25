import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Logo from '../../../img/logo.png';
import ShowcaseImg from '../../../img/peppered-3.jpg';

function About() {
   return (
      <div className='about-page'>
         <Helmet>
            <title>Nested Title</title>
            <meta name='description' content='Nested component' />
         </Helmet>
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
                  <h1>About Us</h1>
               </div>
            </div>
            <div className='content'>
               <div className='container'>
                  <div className='about'>
                     <h3>About</h3>
                     <p>
                        <span className='text-primary'>Ade Farm Snail</span>,
                        located in Oyo State, Nigeria, is the only snail company
                        in the whole of Nigeria. Our snail breeding is
                        completely hygienic and safe for everyone. We combine
                        proven methods to snail farming and are able to supply
                        quality and healthy snails to organizations and homes
                        within and outside Nigeria.
                     </p>
                     <br />
                     <p>
                        Due to our large farms all over Oyo state, we have a
                        breeding capacity for one million snails per year. We
                        are big suppliers to larger enterprises in Europe, India
                        and United State of America. Do you have a special need
                        for as many snails as possible?{' '}
                        <Link to='/contact'>
                           <span className='text-primary'>Contact us now</span>
                        </Link>
                        . Our farms are located in several places in oyo state,
                        Nigeria.
                     </p>
                  </div>
                  <div className='products'>
                     <h3>Our Products</h3>
                     <p>
                        We provide you with delicious snail meals such as{' '}
                        <Link>
                           <span className='text-primary'>
                              Grilled Snail Garnished with Cameron Pepper
                           </span>
                        </Link>
                        ,{' '}
                        <Link>
                           <span className='text-primary'>Grilled Snail</span>
                        </Link>
                        ,{' '}
                        <Link>
                           <span className='text-primary'>Fresh Snail</span>
                        </Link>
                        ,{' '}
                        <Link>
                           <span className='text-primary'>
                              Oven Dried Snail
                           </span>
                        </Link>{' '}
                        and{' '}
                        <Link>
                           <span className='text-primary'>Live Snail</span>
                        </Link>
                        . We are capable of delivering any amount of snails to
                        an individual or an organization.
                     </p>
                  </div>
                  <div className='farm'>
                     <h3>Our Farm</h3>
                     <p>
                        <span className='text-primary'>Ade farm snails</span> is
                        a fully capable organization because we independent.
                        This means that we do not depend on an external source
                        for our snails. We produce our snail from our farm. We
                        have three large farms where we raise and grow our
                        snails. We use proven methods to snail farming and for
                        that reason, we are able to produce quality, quantity
                        and healthy snails.
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

export default About;
