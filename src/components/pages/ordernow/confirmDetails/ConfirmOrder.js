import React, { Component } from 'react';
import { Link } from 'react-scroll';

class ConfirmOrder extends Component {
   render() {
      const { selectedProduct, totalPrice } = this.props;
      return (
         <div className='confirm-ordered-details'>
            <div className='head'>
               <div>
                  <i className='fas fa-check'></i>
                  <h5>Ordered Item</h5>
               </div>
               <Link
                  activeClass='active'
                  to='form-container'
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
               {selectedProduct.map((product) => (
                  <div className='product' key={product.id}>
                     <h5>{product.name}</h5>
                     <p>&#36;{product.unitPrice}</p>
                     <p>No of Kilos: {product.noOfKilos}</p>
                  </div>
               ))}

               <div className='proceed-btn'>
                  <div className='btn btn-primary'>
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
         </div>
      );
   }
}

export default ConfirmOrder;
