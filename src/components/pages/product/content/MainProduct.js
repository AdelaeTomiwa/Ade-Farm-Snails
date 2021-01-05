import React, { Component } from 'react';

class MainProduct extends Component {
   render() {
      const { name, img, aboutDish, ingredients, unitPrice } = this.props;
      return (
         <div className='item'>
            <div className='container'>
               <div className='item-content'>
                  <div className='item-img'>
                     <img src={img} alt={name} />
                  </div>
                  <div className='item-details'>
                     <h3>
                        <span className='text-primary'>{name}</span>
                     </h3>
                     <p>{aboutDish}</p>
                     <p>
                        <strong>One Kilo: &#36;{unitPrice}</strong>
                     </p>
                     <p>
                        <strong>Ingredients: {ingredients}</strong>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default MainProduct;
