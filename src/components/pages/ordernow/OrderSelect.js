import React, { Component } from 'react';

export default class OrderSelect extends Component {
   render() {
      const { products, selectProduct } = this.props;
      return (
         <div className='order-select'>
            <div className='products-list'>
               <div className='head'>
                  <h5>Products</h5>
                  <small>Please Select the Products you want to Order</small>
               </div>
               <div className='select-list'>
                  {products.map((product) => (
                     <div
                        onClick={selectProduct.bind(
                           this,
                           product.name,
                           product.img,
                           product.id,
                           product.urlName,
                           product.unitPrice,
                           product.noOfKilos,
                           product.subTotal
                        )}
                        key={product.id}
                     >
                        <div>
                           <img src={product.img} alt={product.name} />
                           <h5>{product.name}</h5>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}
