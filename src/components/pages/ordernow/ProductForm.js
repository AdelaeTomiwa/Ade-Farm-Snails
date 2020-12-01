import React, { Component } from 'react';

class ProductForm extends Component {
   render() {
      const {
         selectedProduct,
         handleKilosChange,
         proceedCheckout,
      } = this.props;
      return (
         <div className='order-form'>
            <div className='product-container'>
               <div className='product-name'>
                  <h5>Name</h5>
                  {selectedProduct.map((product) => (
                     <div key={product.id}>
                        <input
                           type='text'
                           name='productName'
                           defaultValue={product.name}
                        />
                     </div>
                  ))}
               </div>
               <div className='product-kilos'>
                  <h5>No Of Kilos</h5>
                  {selectedProduct.map((product) => (
                     <div key={product.id} className='select'>
                        <select
                           name='noOfKilos'
                           value={product.noOfKilos}
                           id='kilos'
                           onChange={handleKilosChange.bind(this, product.id)}
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
                  ))}
               </div>
               <div className='product-price'>
                  <h5>Unit Price</h5>
                  {selectedProduct.map((product) => (
                     <div key={product.id}>
                        <p>&#x20a6;</p>
                        <input
                           type='text'
                           name='unitPrice'
                           defaultValue={product.unitPrice}
                        />
                     </div>
                  ))}
               </div>
            </div>
            <div className='proceed-btn' onClick={proceedCheckout}>
               <div className='btn btn-primary'>Proceed To Checkout</div>
            </div>
         </div>
      );
   }
}

export default ProductForm;
