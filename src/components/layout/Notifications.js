import React, { Component } from 'react';

class Notifications extends Component {
   constructor(props) {
      super(props);
      this.state = {
         top: '-100%',
      };
      this.timeout = null;
   }

   styleBtn = () => {
      const top = this.state.top;
      return {
         background: '#333',
         color: '#fff',
         padding: '16px',
         position: 'absolute',
         top: top,
         right: '16px',
         zIndex: '20',
         transition: 'all ease 0.5s',
         width: '20%',
      };
   };

   onShow = () => {
      if (this.timeout) {
         clearTimeout(this.timeout);
         this.setState({ top: '-100%' }, () => {
            this.timeout = setTimeout(() => this.showNot(), 500);
         });
      } else {
         this.showNot();
      }
   };

   showNot = () => {
      this.setState({ top: '16%' }, () => {
         this.timeout = setTimeout(() => this.setState({ top: '-100%' }), 3000);
      });
   };

   render() {
      return (
         <div>
            <button onClick={this.onShow}>Click Here</button>
            <div style={this.styleBtn()}>Here It is</div>
         </div>
      );
   }
}

export default Notifications;
