import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ name, aboutDish, img, id }) => {
   return (
      <div className='products'>
         <div className='box'>
            <div className='img'>
               <img src={img} alt={name} />
            </div>
            <div className='content'>
               <h3>{name}</h3>
               <p>{aboutDish}</p>
               <Link to={`products/order/${id}`}>
                  <button className='btn-primary'>Order Now</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Product;
