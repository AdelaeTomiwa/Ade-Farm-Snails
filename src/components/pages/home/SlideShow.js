import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';

// Importing Images
import Fresh from '../../../img/fresh.jpg';
import Oven from '../../../img/oven.jpg';
import PepperedOne from '../../../img/peppered-1.jpg';
import FreshTwo from '../../../img/fresh-2.jpg';
import Live from '../../../img/live.jpg';

class SlideShow extends Component {
   render() {
      const settings = {
         arrows: false,
         arrowsBlock: false,
         autoplay: true,
         autoplaySpeed: 2000,
         centerMode: true,
         duration: 500,
         slidesToShow: 2,
      };
      return (
         <Slider {...settings}>
            <Link to='/products/order/Fresh Snail/3'>
               <div className='slide'>
                  <img src={Fresh} alt='Fresh Snail' />
                  <h4>Fresh Snail</h4>
               </div>
            </Link>
            <Link to='/products/order/Oven Dried Snail/2'>
               <div className='slide'>
                  <img src={Oven} alt='Oven Dried Snail' />
                  <h4>Oven Dried Snail</h4>
               </div>
            </Link>
            <Link to='/products/order/Grilled and Peppered Snail/1'>
               <div className='slide'>
                  <img src={PepperedOne} alt='Grilled and Peppered Snail' />
                  <h4>Grilled and Peppered Snail</h4>
               </div>
            </Link>
            <Link to='/products/order/Live Snail/4'>
               <div className='slide'>
                  <img src={Live} alt='Live Snail' />
                  <h4>Live Snail</h4>
               </div>
            </Link>
            <Link to='/products/order/Fresh Snail/3'>
               <div className='slide'>
                  <img src={FreshTwo} alt='Fresh Snail' />
                  <h4>Fresh Snail</h4>
               </div>
            </Link>
         </Slider>
      );
   }
}

export default SlideShow;
