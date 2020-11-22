// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Typical from 'react-typical';

// // Importing Context
// import {Consumer} from '../../../data/Context'

// import Logo from '../../../img/logo.png';
// import ShowcaseImg from '../../../img/peppered-3.jpg';

// const Home = () => {
//    return (
//       <div className='home-page'>
//          <header>
//             <div className='container'>
//                <div className='header'>
//                   <div className='logo'>
//                      <Link to='/'>
//                         <img src={Logo} alt='Ade Farm Snail' />
//                      </Link>
//                   </div>
//                   <nav className='nav'>
//                      <ul>
//                         <li>
//                            <Link to='about-us'>About Us</Link>
//                         </li>
//                         <li>
//                            <Link to='our-products'>Our Products</Link>
//                         </li>
//                         <li>
//                            <Link to='farm'>Our Farm</Link>
//                         </li>
//                         <li>
//                            <Link to='contact'>Contact Us</Link>
//                         </li>
//                         <li className='order-now'>
//                            <Link to='order-now'>Order Now</Link>
//                         </li>
//                      </ul>
//                   </nav>
//                </div>
//             </div>
//          </header>
//          <main>
//             <div className='showcase'>
//                <img src={ShowcaseImg} alt='Snail' />
//                <div className='intro'>
//                   <h1>
//                      Snails for{' '}
//                      {/* <span>
//                         <Typical
//                            steps={[
//                               'Pleasure',
//                               5000,
//                               'Satisfaction',
//                               6000,
//                               'Relaxation',
//                               7000,
//                               'Enjoyment',
//                               8000,
//                            ]}
//                            loop={Infinity}
//                            wrapper='b'
//                         />
//                      </span> */}
//                   </h1>
//                   <Link to='/order-now'>
//                      <button className='btn'>Order Now</button>
//                   </Link>
//                </div>
//             </div>
//             <div className='products'>
//                <div className='container'>tomiwa</div>
//             </div>
//          </main>
//       </div>
//    );
// };

// export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

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
                        <div className='showcase'>
                           <img src={ShowcaseImg} alt='Snail' />
                           <div className='intro'>
                              <h1>
                                 Snails for{' '}
                                 {/* <span>
//                         <Typical
//                            steps={[
//                               'Pleasure',
//                               5000,
//                               'Satisfaction',
//                               6000,
//                               'Relaxation',
//                               7000,
//                               'Enjoyment',
//                               8000,
//                            ]}
//                            loop={Infinity}
//                            wrapper='b'
//                         />
//                      </span> */}
                              </h1>
                              <Link to='/order-now'>
                                 <button className='btn'>Order Now</button>
                              </Link>
                           </div>
                        </div>
                        <div className='products'>
                           <div className='container'>
                              <div className='boxes'>
                                 <div>
                                    {value.products.map((product) => (
                                       <Product
                                          key={product.id}
                                          aboutDish={product.aboutDish}
                                          name={product.name}
                                          img={product.img}
                                       />
                                    ))}
                                 </div>
                              </div>
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
