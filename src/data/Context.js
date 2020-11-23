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
