import React, { Component } from 'react';
import { Link } from 'react-scroll';

class ItemSummary extends Component {
   render() {
      const {
         name,
         img,
         unitPrice,
         noOfKilos,
         handleKilosChange,
         proceedCheckout,
      } = this.props;
      return (
         <div className='container'>
            <h4>Item</h4>
            <div className='item-content'>
               <div className='item-img'>
                  <img src={img} alt={name} />
               </div>
               <div className='item-details'>
                  <div className='product-name'>
                     <input
                        type='text'
                        name='productName'
                        defaultValue={name}
                     />
                  </div>
                  <div className='product-price'>
                     <p>Unit Price: &#x20A6;</p>
                     <input
                        type='text'
                        name='unitPrice'
                        defaultValue={unitPrice}
                     />
                  </div>
                  <div className='kilos'>
                     <label htmlFor='kilos'>
                        <span>No of Kilos:</span>
                     </label>
                     <div className='select'>
                        <select
                           name='noOfKilos'
                           value={noOfKilos}
                           id='kilos'
                           onChange={handleKilosChange}
                        >
                           <option value='1'>1</option>
                           <option value='2'>2</option>
                           <option value='3'>3</option>
                           <option value='4'>4</option>
                           <option value='5'>5</option>
                           <option value='6'>6</option>
                           <option value='7'>7</option>
                           <option value='8'>8</option>
                           <option value='9'>9</option>
                           <option value='10'>10</option>
                        </select>
                     </div>
                  </div>

                  <small>
                     Note: We market our goods by kilo, not by quantity, at Ade
                     Farm Snails. This is in your best interest and also in our
                     best interest.
                  </small>
               </div>
            </div>

            <Link
               activeClass='active'
               to='address-section'
               spy={true}
               smooth={true}
               offset={250}
               duration={500}
            >
               <div className='proceed-btn' onClick={proceedCheckout}>
                  <div className='btn btn-light'>Proceed to Checkout</div>
               </div>
            </Link>
         </div>
      );
   }
}

export default ItemSummary;
