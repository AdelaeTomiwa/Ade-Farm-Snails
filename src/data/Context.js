// import React, { createContext, useState, useEffect } from 'react';

// // Importing Images
// import PepperedOne from '../img/peppered-1.jpg';
// import One from '../img/fresh.jpg';
// import Grilled from '../img/grilled.jpg';
// import Fresh from '../img/fresh.jpg';

// export const Context = createContext();

// export const Provider = (props) => {
//    const [products, setProducts] = useState([]);

//    useEffect(() => {
//       fetch('data/products.json', {
//          headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//          },
//       })
//          .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//             setProducts({ data });
//          });
//    }, []);

//    return (
//       <Context.Provider value={'tomiwa'}>{props.children}</Context.Provider>
//    );
// };

import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
   state = {
      products: [],
   };

   componentDidMount() {
      fetch('data/products.json')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ products: data });
         });
   }

   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}

export const Consumer = Context.Consumer;
