import React from 'react';

const Product = ({ name, aboutDish, img }) => {
   return (
      <div className='products'>
         <div className='box'>
            <div className='img'>
               <img src={img} alt={name} />
            </div>
            <div className='content'>
               <h3>{name}</h3>
               <p>{aboutDish}</p>
               <button className='btn-primary'>Order Now</button>
            </div>
         </div>
      </div>
   );
};

export default Product;
