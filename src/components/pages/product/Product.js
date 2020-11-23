import React, { Component } from 'react';
import Content from './Content';

class Product extends Component {
   state = {
      product: [],
   };
   componentDidMount() {
      fetch('/data/products.json')
         .then((res) => res.json())
         .then((data) => {
            data.map((item) => {
               if (item.id == this.props.match.params.id) {
                  this.setState({ product: item });
               } else {
                  return '';
               }
            });
         });
   }

   render() {
      const {
         aboutDish,
         img,
         name,
         unitPrice,
         ingredients,
      } = this.state.product;
      return (
         <div className='product-page'>
            <Content
               aboutDish={aboutDish}
               img={img}
               name={name}
               unitPrice={unitPrice}
               ingredients={ingredients}
            />
         </div>
      );
   }
}

export default Product;
