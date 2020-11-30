import React, { Component } from 'react';

// Importing Context
import { Consumer } from '../../../data/Context';

import Content from './Content';

class OrderNow extends Component {
   state = {
      products: [],
   };

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
