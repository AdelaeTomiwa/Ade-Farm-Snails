// import React, { Component } from 'react';

// class ItemSummary extends Component {
//    state = {
//       name: '',
//    };

//    render() {
//       const { name, img, unitPrice, noOfKilos } = this.props;
//       return (
//          <div>
//             <div className='container'>
//                <h4>Item</h4>
//                <div className='item-content'>
//                   <div className='item-img'>
//                      <img src={img} alt={name} />
//                   </div>
//                   <div className='item-details'>
//                      <div className='product-name'>
//                         <input
//                            type='text'
//                            name='productName'
//                            value='jpm'
//                            readOnly={true}
//                         />
//                         <h3>{name}</h3>
//                      </div>
//                      {/* <div className='product-price'>
//                         <p>
//                            <strong>&#x20a6;</strong>
//                         </p>
//                         <input
//                            type='text'
//                            name='productPrice'
//                            value={unitPrice}
//                            onChange={this.doNothing}
//                         />
//                      </div> */}
//                      {/* <h5>{name}</h5>
//                                <p>
//                                   <strong>
//                                      Unit Price: &#x20a6;{unitPrice}
//                                   </strong>
//                                </p> */}
//                      <div className='kilos'>
//                         <label htmlFor='kilos'>
//                            <span>No of Kilos:</span>
//                         </label>
//                         <div className='select'>
//                            {/* <select
//                               name='Number of Kilos'
//                               value={noOfKilos}
//                               id='kilos'
//                               onChange={this.handleChange}
//                            >
//                               <option value='1'>1</option>
//                               <option value='2'>2</option>
//                               <option value='3'>3</option>
//                               <option value='4'>4</option>
//                               <option value='5'>5</option>
//                               <option value='6'>6</option>
//                               <option value='7'>7</option>
//                               <option value='8'>8</option>
//                               <option value='9'>9</option>
//                               <option value='10'>10</option>
//                            </select> */}
//                         </div>
//                      </div>

//                      <small>
//                         Note: At Ade Farm Snails, We sell our products by kilo
//                         not by quantity. This is to your best interest and also
//                         ours
//                      </small>
//                   </div>
//                </div>
//                {/* <div className='proceed-btn'>
//                                <button
//                                   onClick={this.proceedCheckout}
//                                   className='btn btn-light'
//                                >
//                                   Proceed to Checkout
//                                </button>
//                             </div> */}
//                <div onClick={this.proceedCheckout}>
//                   <div className='btn btn-light'>Proceed to Checkout</div>
//                </div>
//             </div>
//          </div>
//       );
//    }
// }

// export default ItemSummary;

// // import React, { Component } from 'react';
// // // Importing Context
// // import { Consumer } from '../../../data/Context';

// // export default class ItemSummary extends Component {
// //    render() {
// //       return (
// //          <Consumer>
// //             {(value) => {
// //                console.log(value.products);
// //                return (
// //                   <div>
// //                      {value.products.map((product) => (
// //                         <h4>{product.name}</h4>
// //                      ))}
// //                   </div>
// //                );
// //             }}
// //          </Consumer>
// //       );
// //    }
// // }

import React, { Component } from 'react';

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
                     <p>Unit Price: &#x20a6;</p>
                     <input
                        type='text'
                        name='productPrice'
                        defaultValue={unitPrice}
                     />
                  </div>
                  <div className='kilos'>
                     <label htmlFor='kilos'>
                        <span>No of Kilos:</span>
                     </label>
                     <div className='select'>
                        <select
                           name='Number of Kilos'
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
                     Note: At Ade Farm Snails, We sell our products by kilo not
                     by quantity. This is to your best interest and also ours
                  </small>
               </div>
            </div>

            <div className='proceed-btn' onClick={proceedCheckout}>
               <div className='btn btn-light'>Proceed to Checkout</div>
            </div>
         </div>
      );
   }
}

export default ItemSummary;
