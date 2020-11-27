import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
   render() {
      const { name, img, id } = this.props;
      return (
         <div className='product'>
            <div className='product-name'>
               <h4>{name}</h4>
            </div>
            <div className='container'>
               <Link to={`products/order/${name}/${id}`}>
                  <div className='img'>
                     <img src={img} alt={name} />
                  </div>
               </Link>

               <div className='content'>
                  <h4>{name}</h4>
                  <Link to={`products/order/${name}/${id}`}>
                     <button className='btn btn-light'>Order Now</button>
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

export default Product;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'infinite-react-carousel';

// // Importing Images
// import Fresh from '../../../img/fresh.jpg';
// import Oven from '../../../img/oven.jpg';
// import PepperedOne from '../../../img/peppered-1.jpg';
// import FreshTwo from '../../../img/fresh-2.jpg';
// import Live from '../../../img/live.jpg';

// class SlideShow extends Component {
//    render() {
//       const settings = {
//          arrows: false,
//          arrowsBlock: false,
//          autoplay: true,
//          autoplaySpeed: 2000,
//          centerMode: true,
//          duration: 500,
//          slidesToShow: 2,
//       };
//       const {name} = this.props
//       return (
//          <Slider {...settings}>
//             <Link to='/products/order/Fresh Snail/3'>
//                <div className='slide'>
//                   <img src={Fresh} alt='' />
//                   <h4>Fresh Snail</h4>
//                </div>
//             </Link>
//             <Link to='/products/order/Oven Dried Snail/2'>
//                <div className='slide'>
//                   <img src={Oven} alt='' />
//                   <h4>Oven Dried Snail</h4>
//                </div>
//             </Link>
//             <Link to='/products/order/Grilled and Peppered Snail/1'>
//                <div className='slide'>
//                   <img src={PepperedOne} alt='' />
//                   <h4>Grilled and Peppered Snail</h4>
//                </div>
//             </Link>
//             <Link to='/products/order/Live Snail/4'>
//                <div className='slide'>
//                   <img src={Live} alt='' />
//                   <h4>Live Snail</h4>
//                </div>
//             </Link>
//             <Link to='/products/order/Fresh Snail/3'>
//                <div className='slide'>
//                   <img src={FreshTwo} alt='' />
//                   <h4>Fresh Snail</h4>
//                </div>
//             </Link>
//          </Slider>
//       );
//    }
// }

// export default SlideShow;
