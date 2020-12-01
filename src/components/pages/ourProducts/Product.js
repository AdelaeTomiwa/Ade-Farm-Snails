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
