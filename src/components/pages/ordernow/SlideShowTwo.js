import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

// Importing Images
import Fresh from '../../../img/fresh.jpg';
import Oven from '../../../img/oven.jpg';
import PepperedOne from '../../../img/peppered-1.jpg';
import Grilled from '../../../img/grilled.jpg';
import PepperedTwo from '../../../img/peppered-2.jpg';

class SlideShowTwo extends Component {
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
            <div className='slide'>
               <img src={Fresh} alt='' />
               <h4>Fresh Snail</h4>
            </div>
            <div className='slide'>
               <img src={Oven} alt='' />
               <h4>Oven Dried Snail</h4>
            </div>
            <div className='slide'>
               <img src={PepperedOne} alt='' />
               <h4>Grilled and Peppered Snail</h4>
            </div>
            <div className='slide'>
               <img src={Grilled} alt='' />
               <h4>Grilled Snail</h4>
            </div>
            <div className='slide'>
               <img src={PepperedTwo} alt='' />
               <h4>Grilled and Peppered Snail</h4>
            </div>
         </Slider>
      );
   }
}

export default SlideShowTwo;
