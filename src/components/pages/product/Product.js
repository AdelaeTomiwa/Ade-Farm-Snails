import React, { Component } from 'react';
import Content from './content/Content';

class Product extends Component {
   state = {
      product: [],
   };
   componentDidMount() {
      fetch('/data/products.json')
         .then((res) => res.json())
         .then((data) => {
            // eslint-disable-next-line
            data.map((item) => {
               // eslint-disable-next-line
               if (item.id == this.props.match.params.id) {
                  this.setState({ product: item });
                  document.title = `Ade Farm Snails | ${this.state.product.name}`;
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
