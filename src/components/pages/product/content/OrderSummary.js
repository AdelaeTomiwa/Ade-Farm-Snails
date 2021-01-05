import React, { Component } from 'react';

import { Link } from 'react-scroll';

class OrderSummary extends Component {
   render() {
      const { name, img, unitPrice, noOfKilos } = this.props;
      return (
         <div className='order-summary'>
            <div className='container'>
               <h4>Summary</h4>
               <div className='summary-content'>
                  <div className='summary-img'>
                     <img src={img} alt={name} />
                  </div>
                  <div className='summary-details'>
                     <h5>{name}</h5>
                     <p>
                        <strong>Unit Price: &#36;{unitPrice}</strong>
                     </p>
                     <p>No of Kilos: {noOfKilos}</p>
                  </div>
               </div>
               <div className='btns'>
                  <button className='btn btn-light'>
                     Total:&#36;{noOfKilos * unitPrice}
                  </button>
                  <Link
                     activeClass='active'
                     to='item-summary'
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                  >
                     <button className='btn btn-light'>Modify Order</button>
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

export default OrderSummary;
