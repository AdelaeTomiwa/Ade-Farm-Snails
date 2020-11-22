import React from 'react';

const Product = ({ name, aboutDish, img }) => {
   return (
      <div className='products'>
         <img src={img} alt={name} />
         <h3>{name}</h3>
         <p>{aboutDish}</p>
         <button className='btn'>Order Now</button>
      </div>
   );
};

export default Product;
