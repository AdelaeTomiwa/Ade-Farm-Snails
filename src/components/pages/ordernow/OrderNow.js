import React, { Component } from 'react';

// Importing Context
import { Consumer } from '../../../data/Context';

import Content from './Content';

class OrderNow extends Component {
   state = {
      products: [],
   };

   componentDidMount() {
      document.title = `Ade Farm Snails | Order Now`;
   }

   render() {
      return (
         <Consumer>
            {(value) => {
               return <Content value={value.products} />;
            }}
         </Consumer>
      );
   }
}

export default OrderNow;
