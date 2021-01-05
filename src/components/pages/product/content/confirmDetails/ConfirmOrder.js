import React, { Component } from 'react';
import { Link } from 'react-scroll';

class ConfirmOrder extends Component {
   render() {
      const { img, unitPrice, noOfKilos, totalPrice, name } = this.props;
      return (
         <div className='confirm-ordered-details'>
            <div className='head'>
               <div>
                  <i className='fas fa-check'></i>
                  <h5>Ordered Item</h5>
               </div>
               <Link
                  activeClass='active'
                  to='item-summary'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
               >
                  <div className='text-primary'>
                     <h5>CHANGE</h5>
                  </div>
               </Link>
            </div>
            <div className='content'>
               <div className='ordered-img'>
                  <img src={img} alt={name} />
               </div>
               <div className='ordered-content'>
                  <h5>{name}</h5>
                  <p>&#36;{unitPrice}</p>
                  <p>No of Kilos: {noOfKilos}</p>
                  <p className='total'>
                     <strong>Total: &#36;</strong>
                     <input
                        type='text'
                        defaultValue={totalPrice}
                        name='totalPrice'
                     />
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

export default ConfirmOrder;
