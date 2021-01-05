import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class OrderSummary extends Component {
   render() {
      const { selectedProduct, totalPrice } = this.props;
      return (
         <div className='order-summary-details' id='order-summary-details'>
            <div className='head'>
               <h5>Order Summary</h5>
            </div>
            <div className='ordered-items'>
               {selectedProduct.map((product) => (
                  <div key={product.id} className='ordered-item'>
                     <div className='img-container'>
                        <img src={product.img} alt={product.name} />
                     </div>
                     <div className='item-details'>
                        <div className='content'>
                           <h5>{product.name}</h5>
                           <p>No of Kilos: {product.noOfKilos}</p>
                           <p>Unit Price: &#36;{product.unitPrice}</p>
                        </div>
                        <div className='sub-total'>
                           <h5>
                              Sub Total: &#36;
                              {product.subTotal}
                           </h5>
                        </div>
                     </div>
                  </div>
               ))}

               <div className='btns'>
                  <Link
                     activeClass='active'
                     to='form-container'
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                  >
                     <div className='btn btn-primary'>Modify Order</div>
                  </Link>
                  <div className='proceed-btn'>
                     <div className='btn btn-primary'>
                        Total: &#36;{totalPrice}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
